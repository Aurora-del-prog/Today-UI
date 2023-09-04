<template>
<div
  class="vk-select"
  :class="{'is-disabled': disabled }"
  @click="toggleDropdown"
  @mouseenter="states.mouseHover = true"
  @mouseleave="states.mouseHover = false"
>
  <s-tooltip
    placement="bottom-start"
    ref="tooltipRef"
    :popperOptions="popperOptions"
    @click-outside="controlDropdown(false)"
    manual
  >
    <s-input 
      v-model="states.inputValue"
      :disabled="disabled"
      :placeholder="filteredPlaceholder"
      ref="inputRef"
      :readonly="!filterable || !isDropdownShow"
      @input="debouceOnFilter"
      @keydown="handleKeydown"
    >
      <template #suffix>
        <s-icon 
          icon="circle-xmark"
          v-if="showClearIcon"
          class="vk-input__clear"
          @mousedown.prevent="NOOP"
          @click.stop="onClear"  
        />

        <s-icon
          v-else
          icon="angle-down" 
          class="header-angle" 
          :class="{ 'is-active': isDropdownShow }"
        />
      </template>
    </s-input>
    <template #content>
      <div class="vk-select__loading" v-if="states.loading"><Icon icon="spinner" spin/></div>
      <div class="vk-select__nodata" v-else-if="filterable && filteredOptions.length === 0">no matching data</div>
      <ul class="vk-select__menu" v-else>
        <template v-for="(item, index) in filteredOptions" :key="index">
          <li 
            class="vk-select__menu-item"
            :class="{
              'is-disabled': item.disabled, 
              'is-selected': states.selectedOption?.value === item.value ,
              'is-highlighted': states.highlightIndex === index
            }"
            :id="`select-item-${item.value}`"
            @click.stop="itemSelect(item)"
          >
            <RenderVnode :vNode="renderLabel ? renderLabel(item) : item.label"/>
          </li>
        </template>
      </ul>
    </template>
  </s-tooltip>
</div>  
</template>
<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import type { Ref } from 'vue'
import { isFunction, debounce } from 'lodash-es'
import type { SelectProps, SelectEmits, SelectOption, SelectStates } from './types'
import STooltip from '../../Tooltip/'
import type { TooltipInstance } from '../../Tooltip/src/types'
import SInput from '../../Input'
import SIcon from '../../Icon'
import RenderVnode from '../../Common/RenderVnode'
import type { InputInstance } from '../../Input/src/types'

const findOption = (value: string) => {
  const option = props.options.find(option => option.value === value)
  return option ? option : null
}
defineOptions({
  name: 'SSelect'
})
const props = withDefaults(defineProps<SelectProps>(), {
  options: () => []
})
const timeout = computed(() => props.remote ? 300 : 0)
const emits = defineEmits<SelectEmits>()
const initialOption = findOption(props.modelValue)
const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectedOption: initialOption,
  mouseHover: false,
  loading: false,
  // 高亮
  highlightIndex: -1
})
const isDropdownShow = ref(false)
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }: { state: any }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    }
  ],
}
const filteredOptions = ref(props.options)
watch(() => props.options, (newOptions) => {
  filteredOptions.value = newOptions
})
//对输入值进行搜索过滤处理
const generateFilterOptions = async (searchValue: string) => {
  // 如果不可过滤，则直接返回
  if (!props.filterable) return

  // 如果存在自定义的过滤方法，并且该方法是一个函数
  if (props.filterMethod && isFunction(props.filterMethod)) {
    // 使用自定义的过滤方法对选项进行过滤
    filteredOptions.value = props.filterMethod(searchValue)
  }
  // 否则，如果需要远程获取选项，并且存在远程获取方法，并且该方法是一个函数
  else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    // 设置加载状态为 true，显示加载提示
    states.loading = true
    try {
      // 调用远程获取方法，并传入搜索值作为参数
      filteredOptions.value = await props.remoteMethod(searchValue)
    } catch (e) {
      console.error(e)
      // 如果出现错误，将过滤后的选项设置为空数组
      filteredOptions.value = []
    } finally {
      // 不论成功还是失败，都将加载状态设置为 false
      states.loading = false
    }
  }
  // 否则，使用默认的过滤逻辑：根据选项的 label 属性包含搜索值来过滤
  else {
    filteredOptions.value = props.options.filter(option => option.label.includes(searchValue))
  }

  // 将高亮的选项索引重置为 -1
  states.highlightIndex = -1
}

const onFilter = () => {
  generateFilterOptions(states.inputValue)
}
//输入时，对输入的文字进行过滤
const debouceOnFilter = debounce(() => {
  onFilter()
}, timeout.value)
//input默认显示值
const filteredPlaceholder = computed(() => {
  return (props.filterable && states.selectedOption && isDropdownShow.value) 
  ? states.selectedOption.label : props.placeholder
})
//下拉框展示的具体处理
const controlDropdown = (show: boolean) => {
  // 如果需要显示下拉框
  if (show) {
    // 如果可过滤，并且之前已经选择了一个选项，则将输入值重置为空字符串
    if (props.filterable && states.selectedOption) {
      states.inputValue = ''
    }
    // 如果可过滤，则根据当前输入值生成默认的过滤选项
    if (props.filterable) {
      generateFilterOptions(states.inputValue)
    }
    // 显示提示框
    tooltipRef.value.show()
  } 
  // 否则，隐藏提示框
  else {
    tooltipRef.value.hide()
    // 如果可过滤，则在失焦时将之前选择的选项回填到输入框中
    if (props.filterable) {
      states.inputValue = states.selectedOption ? states.selectedOption.label : ''
    }
    // 将高亮的选项索引重置为 -1
    states.highlightIndex = -1
  }
  // 更新下拉框显示状态
  isDropdownShow.value = show
  // 触发 visible-change 事件，并传入当前的下拉框显示状态
  emits('visible-change', show)
}

//键盘点击事件
const handleKeydown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
      if (!isDropdownShow.value) {
        controlDropdown(true)
      } else {
        if (states.highlightIndex > -1 && filteredOptions.value[states.highlightIndex]) {
          itemSelect(filteredOptions.value[states.highlightIndex])
        } else {
          controlDropdown(false)
        }
      }
      break
    case 'Escape':
      if (isDropdownShow.value) {
        controlDropdown(false)
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      // states.highlightIndex = -1
      if (filteredOptions.value.length > 0) {
        if (states.highlightIndex === -1 || states.highlightIndex === 0) {
          states.highlightIndex = filteredOptions.value.length - 1
        } else {
          // move up
          states.highlightIndex--
        }
      }
      break
    case 'ArrowDown':
      e.preventDefault()
      // states.highlightIndex = -1
      if (filteredOptions.value.length > 0) {
        if (states.highlightIndex === -1 || states.highlightIndex === (filteredOptions.value.length - 1)) {
          states.highlightIndex = 0
        } else {
          // move up
          states.highlightIndex++
        }
      }
      break
    default:
      break;
  }
}
//是否展示清空按钮
const showClearIcon = computed(() => {
  // * hover 上去
  // * props.clearable 为 true
  // 必须要有选择过选项
  // Input 的值不能为空
  return props.clearable 
    && states.mouseHover
    && states.selectedOption
    && states.inputValue.trim() !== ''
})
//清空数据
const onClear = () => {
  states.selectedOption = null
  states.inputValue = ''
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}
const NOOP = () => {}
//控制下拉框的展示
const toggleDropdown = () => {
  if (props.disabled) return
  if (isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}
const itemSelect = (e: SelectOption) => {
  if (e.disabled) return
  states.inputValue = e.label
  states.selectedOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlDropdown(false)
  inputRef.value.ref.focus()
}
</script>
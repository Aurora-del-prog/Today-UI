<template>
  <div
    class="vk-collapse"
  >
    <slot/>
  </div>
</template>
<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'
defineOptions({
  name: 'SCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)
watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue
})
if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only have one acitve item')
}
const handleItemClick = (item: NameType) => {
  let _activeNames = [...activeNames.value]

  if (props.accordion) {
    // 如果是手风琴模式，则只允许展开一个项目
    _activeNames = [activeNames.value[0] === item ? '' : item]
    activeNames.value = _activeNames
  } else {
    const index = _activeNames.indexOf(item)

    if (index > -1) {
      // 如果项目已经存在于活跃项数组中，表示该项目正在被展开，因此将其从数组中删除，实现折叠效果
      _activeNames.splice(index, 1)
    } else {
      // 如果项目不存在于活跃项数组中，表示该项目没有被展开，因此将其添加到数组中，实现展开效果
      _activeNames.push(item)
    }

    activeNames.value = _activeNames
  }

  // 触发名为 'update:modelValue' 的自定义事件，将更新后的活动项数组作为参数传递
  emits('update:modelValue', _activeNames)

  // 触发名为 'change' 的自定义事件，将更新后的活动项数组作为参数传递
  emits('change', _activeNames)
}
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

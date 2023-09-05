<template>
  <div>
    <div class="s-base-modal s-modal" v-if="visible">
      <!-- 遮罩 -->
      <div
        class="s-base-modal__mask"
        @click="handleMask"
      ></div>
      <!-- 弹框 -->
      <div 
        class="s-modal__container" 
        :class="{
        'is-alignCenter': props.alignCenter}"  
        v-if="visible"
        :style="{'width':props.width}">
          <!-- 标题区 -->
        <div class="header" v-if="$slots.header">
          <slot name="header" :close="handleMask" ></slot>
        </div>
        <div 
          class="s-modal__header"
          :style="{'text-align': 
          props.center ? 'center' : 'left'}"  
          v-else>
            {{ props.title }}
            <s-icon 
              v-if="props.showClose"
              icon="xmark" 
              class="s-modal__close"
              @click="handleMask"
            >  
            </s-icon>
          </div>
          <!-- 内容 -->
          <div class="s-modal__body" v-if="$slots.default">
            <slot ></slot>
          </div>
          <!-- 操作区footer -->
          <div class="s-modal__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import type { DialogProps,DialogEmits } from './types';
import SIcon from '../../Icon'
defineOptions({
  name: 'SDialog'
})
const props = withDefaults(defineProps<DialogProps>(),{
  modelValue: false,
  title: '',
  width: '30%'
})
const emits = defineEmits<DialogEmits>()
const visible = ref(props.modelValue)
watch(()=> props.modelValue,(newVal) => {
  visible.value = newVal
})
const visibleMask = ref(props.showMask)
watch(()=> props.showMask,(newVal) => {
  visibleMask.value = newVal
})
// 遮罩点击
const handleMask = () =>{
  visible.value = false
  emits('update:modelValue', visible.value)
}
</script>
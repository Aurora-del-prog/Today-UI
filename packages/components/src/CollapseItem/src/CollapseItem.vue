<template>
<div
  class="vk-collapse-item"
  :class="{
    'is-disabled': disabled
  }"
>
  <div 
    class="vk-collapse-item__header"
    :class="{
      'is-disabled': disabled,
      'is-active': isActive
    }"
    :id="`item-header-${name}`" 
    @click="handleClick"
  >
    <slot name="title">{{title}}</slot>
    <s-icon icon="angle-right" class="header-angle" />
  </div>
  <Transition name="slide" v-on="transitionEvents">
    <div class="vk-collapse-item__wrapper" v-show="isActive">
      <div class="vk-collapse-item__content" :id="`item-content-${name}`">
        <slot/>
      </div>
    </div>
  </Transition>
</div>
</template>
<script setup lang="ts">
import { inject, computed } from 'vue'
import type { CollapseItemProps, CollapseContext } from './types'
import { collapseContextKey } from './types'
import SIcon from '../../Icon'
import '../style/style.css'

defineOptions({
  name: 'SCollapseItem'
})
const props = defineProps<CollapseItemProps>()
const collapseContext = inject(collapseContextKey) as CollapseContext
console.log(collapseContext)
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))
const handleClick = () => {
  if (props.disabled) { return }
  collapseContext?.handleItemClick(props.name)
}
// transiton动画
// eslint-disable-next-line no-unused-vars
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) { 
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }

}
</script>
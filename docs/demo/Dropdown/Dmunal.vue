<template>
  <div class="basic block">
    <s-dropdown 
      placement="bottom" 
      :menu-options="options"
      trigger="click"
      manual
      ref="tooltipRef"
    >
      <s-button> 菜单容器 </s-button>
    </s-dropdown>
    <br/><br/>
    <s-button type="primary" @click="open"> 点击手动触发显示 </s-button>
    <s-button type="danger" @click="close"> 点击手动触发隐藏 </s-button>
  </div>
</template>
<script setup>
import { h, ref } from 'vue'
const options = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
const tooltipRef = ref()
const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}
</script>
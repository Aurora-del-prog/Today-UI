<template>
  <div class="basic block">
    <s-tooltip 
      content="hello tooltip"
      ref="tooltipRef"
      manual
    >
      <s-button> 手动容器 </s-button>
    </s-tooltip>

    <br/><br/>
    <s-button type="primary" @click="open"> 点击手动触发显示 </s-button>
    <s-button type="danger" @click="close"> 点击手动触发隐藏 </s-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const tooltipRef = ref()
  const open = () => {
    tooltipRef.value?.show()
  }
  const close = () => {
    tooltipRef.value?.hide()
  }
</script>
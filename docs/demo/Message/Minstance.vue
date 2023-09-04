<template>
  <div class="basic block">
    <s-button @click="open"> 创建三条消息 </s-button>
    <s-button @click="close"> 全部关闭 </s-button>
  </div>
</template>
<script setup>
import { createMessage, closeAll } from '../../../packages/Message'
const open = () => {
  createMessage({ message: 'hello world1', duration: 0 })
  createMessage({ message: 'hello world2', duration: 0 })
  createMessage({ message: 'hello world3', duration: 0 })
}
const close = () => {
  closeAll()
}
</script>

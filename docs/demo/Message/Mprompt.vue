<template>
  <div class="basic block">
    <s-button @click="open"> 可关闭消息 </s-button>
  </div>
</template>
<script setup>
import { createMessage } from '../../../packages/Message'
const open = () => {
  createMessage({ message: 'hello world', showClose: true, duration: 0 })
}
</script>

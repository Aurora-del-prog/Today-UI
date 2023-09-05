<template>
  <div class="basic block">
    <s-button @click="open"> 可关闭消息 </s-button>
  </div>
</template>
<script setup>
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const { $message } = instance.appContext.config.globalProperties;
const open = () => {
  $message({ message: 'hello world', showClose: true, duration: 0 })
}
</script>

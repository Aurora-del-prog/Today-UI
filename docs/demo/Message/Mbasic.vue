<template>
  <div class="basic block">
    <s-button type="primary" @click="open"> 创建一条消息 </s-button>
    <s-button  @click="open2"> 创建支持 VNode 的消息 </s-button>
  </div>
</template>
<script setup>
import { h } from 'vue'
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const { $message } = instance.appContext.config.globalProperties;
console.log(instance.appContext.config.globalProperties)
const open = () => {
  $message({ message: 'hello world' })
}
const open2 = () => {
  $message({ message: h('b', 'this is bold') })
}
</script>

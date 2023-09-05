<template>
  <div class="basic block">
    <s-button @click="open"> 创建三条消息 </s-button>
    <s-button @click="close"> 全部关闭 </s-button>
  </div>
</template>
<script setup>
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const { $message } = instance.appContext.config.globalProperties;
let t1 = null;
let t2 = null;
let t3 = null;
const open = () => {
  t1 =  $message({ message: 'hello world1', duration: 0 })
  t2 = $message({ message: 'hello world2', duration: 0 })
  t3 = $message({ message: 'hello world3', duration: 0 })
}
const close = () => {
  // eslint-disable-next-line no-undef
  t1.closeAll()
  t2.closeAll()
  t3.closeAll()

}
</script>

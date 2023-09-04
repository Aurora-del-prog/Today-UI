<template>
  正常：<s-switch v-model="test" /> <br/>
  禁用：<s-switch v-model="test2" disabled/>
</template>
<script setup>
import { ref } from 'vue'
const test = ref(false)
const test2 = ref(false)
</script>
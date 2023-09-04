<template>
  <s-autoComplete v-model="test" placeholder="请输入文字" :options="options2" :filterMethod="handleFetch"  />
  <span>{{test}}</span>
</template>
<script setup>
import { ref } from 'vue'
const test = ref('1')

const options2 = [
  { label: 'hello', value: '1' },
  { label: 'xyz', value: '2' },
  { label: 'testing', value: '3' },
  { label: 'win', value: '4' },
  { label: 'thank', value: '5' },
  { label: 'pme', value: '6' },
  { label: 'check', value: '7', disabled: true }
]
const handleFetch = (query) => {
  return options2.filter(name => name.label.includes(query))
}
</script>
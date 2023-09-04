<template>
  <s-autoComplete v-model="test" placeholder="自定义搜索结果模板" :options="options2" :renderLabel="customRender"
  :filterMethod="handleFetch" />
</template>
<script setup>
import { ref, h } from 'vue'
const test = ref('')
const options2 = [
  { label: 'hello', value: '1' },
  { label: 'xyz', value: '2' },
  { label: 'testing', value: '3' },
  { label: 'win', value: '4' },
  { label: 'thank', value: '5' },
  { label: 'pme', value: '6' },
  { label: 'check', value: '7', disabled: true }
]
const customRender = (option) => {
  return h('div', { className: 'xyz' }, [h('b', option.label), h('span', option.value)])
}
const handleFetch = (query) => {
  return options2.filter(name => name.label.includes(query))
}
</script>
<style>
.vk-s-select__menu-item, .xyz  {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
<template>
  <form class="vk-form">
   <slot />
  </form>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import type { FormProps } from './type/type';
import { formContextKey } from './type/type';
defineOptions({
  name: 'SForm'
})
const props = defineProps<FormProps>()
provide(formContextKey,props)
</script>

<style lang="scss" scoped>

</style>
<template>
  <s-input v-model="test" placeholder="prepend append">
    <template #prepend>Https://</template>
    <template #append>.com</template>
  </s-input>

  <s-input v-model="test" placeholder="prefix suffix">
    <template #prefix>
      <s-icon icon="fa-user" />
    </template>
    <template #suffix>
      <s-icon icon="fa-user" />
    </template>
  </s-input>
</template>
<script setup>
import { ref } from 'vue'
const test = ref('')
</script>
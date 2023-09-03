<template>
  <div class="size-holder">
    <s-input v-model="test" placeholder="大的 Input" size="large">
    </s-input>
    <s-input v-model="test" placeholder="普通的 Input">
    </s-input>
    <s-input v-model="test" placeholder="小的 Input" size="small">
    </s-input>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const test = ref('')
</script>
<style scoped>
.size-holder {
  display: flex;
  align-items: center;
}
</style>
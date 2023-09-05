<template>
  <s-button @click="open">打开</s-button>

  <s-dialog v-model="visible">
    <template #header="{ close }">
      <div class="my-header">
        <h4>This is a custom header!</h4>
        <s-icon class="icon" icon="xmark" @click="close"></s-icon>
      </div>
    </template>
    This is dialog content.
  </s-dialog>
</template>
<script setup>
import { ref } from 'vue'

  const visible = ref(false)
  const open = () => {
    visible.value = true;
  }
</script>

<style>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-right: 16px;
  word-break: break-all;
  color: black
}
.icon{
  &:hover {
    cursor: pointer;

    path {
      fill: #409eff;
    }
  }
}
</style>

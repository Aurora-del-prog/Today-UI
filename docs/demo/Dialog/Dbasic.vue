<template>
  <s-button @click="open">打开</s-button>

  <s-dialog v-model="visible" title="小贴士" 
  center show-close align-center>
    <span>这是一条消息！</span>
    <template #footer>
      <div class="dialog-footer">
        <s-button style="margin-right: 12px;" @click="visible = false">取消</s-button>
        <s-button @click="visible = false">确定</s-button>
      </div>
    </template>
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
.dialog-footer {
  padding: 20px;
  text-align: right;
}
</style>

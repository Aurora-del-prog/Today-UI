<template>
  <div class="basic block">
    <s-button @click="open('success')"> Success </s-button>
    <s-button @click="open('info')"> Info </s-button>
    <s-button @click="open('warning')"> warning </s-button>
    <s-button @click="open('danger')"> Danger </s-button>
  </div>
</template>
<script setup>
import { createMessage } from '../../../packages/Message'
const open = (type) => {
  createMessage({ message: 'hello world', type })
}
</script>
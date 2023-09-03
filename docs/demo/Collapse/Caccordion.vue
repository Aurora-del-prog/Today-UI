<template>
<div class="basic block">
  <s-collapse v-model="openedValue" accordion>
    <s-collapseItem name="a" title="Title A">
      <h1>headline title</h1>
      <div> this is content a aaa </div>
    </s-collapseItem>
    <s-collapseItem name="b" title="Title B">
      <div> this is bbbbb test </div>
    </s-collapseItem>
    <s-collapseItem name="c" title="Title C">
      <div> this is cccc test </div>
    </s-collapseItem>
  </s-collapse>
</div>
</template>

<script setup>
import { ref } from 'vue'
const openedValue = ref('a')
</script>
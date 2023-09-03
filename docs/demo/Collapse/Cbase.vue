<template>
<div class="basic block">
  <s-collapse v-model="openedValue">
    <SCollapseItem name="a" title="Title A">
      <h1>headline title</h1>
      <div> this is content a aaa </div>
    </SCollapseItem>
    <SCollapseItem name="b" title="Title B">
      <div> this is bbbbb test </div>
    </SCollapseItem>
    <SCollapseItem name="c" title="Disabled Title" disabled>
      <div> this is cccc test </div>
    </SCollapseItem>
  </s-collapse>
</div>
</template>
<script setup>
  import { ref } from 'vue'
  const openedValue = ref(['a'])
</script>
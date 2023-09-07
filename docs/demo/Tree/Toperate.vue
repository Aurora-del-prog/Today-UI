<template>
  <STree :data="data" operable></STree>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'node 1',
        id: 'node-1',
        children: [
          {
            label: 'node 1-1',
            id: 'node-1-1'
          },
        ]
      },
      {
        label: 'node 2',
        id: 'node-2'
      },
    ])

    return {
      data,
    }
  },
})
</script>

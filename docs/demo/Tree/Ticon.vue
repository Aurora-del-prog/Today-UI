<template>
  <STree :data="data">
    <template #icon="{ nodeData, toggleNode }">
      <s-icon 
        v-if="!nodeData.expanded" 
        icon="angle-right"
        @click="event => {
          event.stopPropagation()
          toggleNode(nodeData)}" >
      </s-icon>
      <s-icon
        v-else
        icon="angle-down"
        @click="event => {
          event.stopPropagation()
          toggleNode(nodeData)}">
      </s-icon>
    </template>
  </STree>
</template>
<script setup>
  import { ref } from 'vue'
  const data = ref([
    {
      label: 'docs',
      id: 'docs'
    },
    {
      label: 'packages',
      id: 'packages',
      expanded: true,
      children: [
        {
          label: 'plugin-vue',
          id: 'plugin-vue'
        },
        {
          label: 'vite',
          id: 'vite',
          expanded: true,
          children: [
            {
              label: 'src',
              id: 'src'
            },
            {
              label: 'README.md',
              id: 'README.md'
            }
          ]
        }
      ]
    },
    {
      label: 'scripts',
      id: 'scripts',
      children: [
        {
          label: 'release.ts',
          id: 'release.ts'
        },
        {
          label: 'verifyCommit.ts',
          id: 'verifyCommit.ts'
        }
      ]
    },
    {
      label: 'pnpm-workspace.yaml',
      id: 'pnpm-workspace.yaml'
    }
  ])
</script>
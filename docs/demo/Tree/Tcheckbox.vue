<template>
  <STree :data="data" checkable></STree>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: 'docs',
    id: 'docs',
    checked: true
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    checked: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue',
        checked: true
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        checked: true,
        children: [
          {
            label: 'src',
            id: 'src',
            checked: true
          },
          {
            label: 'README.md',
            id: 'README.md',
            checked: true
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

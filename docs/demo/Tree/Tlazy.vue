<template>
  <s-tree :data="data" @lazy-load="lazyLoad"></s-tree>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const data = ref([
      {
        id: 'node-1',
        label: 'node 1',
        isLeaf: false
      },
      {
        id: 'node-2',
        label: 'node 2',
        isLeaf: false
      }
    ]);

   const lazyLoad = (node, callback) => {
    setTimeout(() => {
      const randomLabel = generateRandomLabel(); // 生成随机的 label 值
      const data = [
        {
          label: randomLabel,
          id: randomLabel,
          expanded: false,
          isLeaf: false
        }
      ];
      callback({
        treeItems: data,
        node,
      });
    }, 1000);
  };

  const generateRandomLabel = () => {
    const randomString = Math.random().toString(36).substring(2, 8); // 生成随机字符串
    return `lazy node ${randomString}`;
  };

    return {
      data,
      lazyLoad,
    }
  }
})
</script>

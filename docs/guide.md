### 安装


```bash
npm i @coderhsl/s-ui --save
```

### 开始使用

**全局使用**


```js
// 引入所有组件
import SUI from '@coderhsl/s-ui'
// 引入样式
import '@coderhsl/s-ui/dist/style.css'

import App from './App.vue'
// 全局使用
createApp(App).use(SUI).mount('#app')
```

```vue
<template>
  <s-button>我是 VkButton</s-button>
</template>
```

**单个导入**

S-UI 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。


```vue
<template>
  <Button>我是 Button</Button>
</template>
<script>
  import { Button } from ' @coderhsl/s-ui'
  export default {
    components: { Button },
  }
</script>
```

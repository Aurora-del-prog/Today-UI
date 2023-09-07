import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  vite: {
    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/markdown-examples' },
      { text: '指南', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Test here', link: '/api-examples' }
        ]
      },
      {
        text: '基础组件',
        items: [
          {text: 'Button 按钮', link: '/components/button' },
          {text: 'Collapse 折叠面板', link: '/components/collapse ' },
          {text: 'Tooltip 文字提示', link: '/components/tooltip' },
          {text: 'Input 输入框', link: '/components/input' },
          {text: 'Message 消息', link: '/components/message' },
          {text: 'Switch 开关', link: '/components/switch' },
          {text: 'Select 选择器', link: '/components/select' },
          {text: 'AutoComplete 自动填充器', link: '/components/autoComplete' },
          {text: 'Dialog 对话框', link: '/components/dialog' },
          {text: 'Tree 树形控件', link: '/components/tree' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "S-UI",
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
      { text: '指南', link: '/guide' },
      { text: '组件', link: '/components/button' }
    ],

    sidebar: [
      {
        text: '基础组件',
        items: [
          {text: 'Button 按钮', link: '/components/button' }
        ]
      },
      {
        text: '反馈组件',
        items: [
          {text: 'Tooltip 文字提示', link: '/components/tooltip' },
          {text: 'Message 消息', link: '/components/message' },
          {text: 'Dialog 对话框', link: '/components/dialog' },
          {text: 'Dropdown 下拉菜单', link: '/components/dropDown' },
        ]
      },
      {
        text: '表单组件',
        items: [
          {text: 'Input 输入框', link: '/components/input' },
          {text: 'Switch 开关', link: '/components/switch' },
          {text: 'Select 选择器', link: '/components/select' },
        ]
      },
      {
        text: '数据展示',
        items: [
          {text: 'Collapse 折叠面板', link: '/components/collapse ' },
          {text: 'AutoComplete 自动填充器', link: '/components/autoComplete' },
          {text: 'Tree 树形控件', link: '/components/tree' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aurora-del-prog/s-ui' }
    ]
  }
})

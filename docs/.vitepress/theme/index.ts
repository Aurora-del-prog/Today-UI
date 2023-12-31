import DefaultTheme from 'vitepress/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'

import '@vitepress-demo-preview/component/dist/style.css'
import '../../../src/styles/index.css'
import './custom.css'
import SUI from '../../../packages/components'
import { Message } from '../../../packages/components/src/Message/index'


library.add(fas)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.$message = Message;
    app.use(SUI)
    app.component('demo-preview', ElementPlusContainer)
  }  
}
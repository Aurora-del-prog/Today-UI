import DefaultTheme from 'vitepress/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'

import '@vitepress-demo-preview/component/dist/style.css'
import '../../../src/styles/index.css'
import './custom.css'
import SUI from '../../../packages'
import '../../../packages/Message/index'

library.add(fas)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(SUI)
    app.component('demo-preview', ElementPlusContainer)
  }  
}
// /scripts/entry.ts
import type { App } from 'vue'
import ButtonPlugin, { Button } from './Button'
import IconPlugin, { Icon } from './Icon'


const installs = [
  ButtonPlugin,
  IconPlugin
]

export {
  Button,
  Icon
}

export default {
  install(app: App): void {
    installs.forEach(p => app.use(p))
  }
}

// /scripts/entry.ts
import type { App } from 'vue'
import ButtonPlugin, { Button } from './Button'

const installs = [
  ButtonPlugin,
]

export {
  Button,
}

export default {
  install(app: App): void {
    installs.forEach(p => app.use(p))
  }
}

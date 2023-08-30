import Button from "./src/Button.vue"
import type {App} from "vue";


export  { Button }

export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
}
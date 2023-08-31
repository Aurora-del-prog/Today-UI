import Icon from "./src/Icon.vue"
import type {App} from "vue";


export  { Icon }

export default {
  install(app: App) {
    app.component(Icon.name, Icon)
  }
}
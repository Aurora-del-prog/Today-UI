import Form from "./src/Form.vue";
import FormItem from "./src/FormItem.vue";

import { withInstall} from '../withInstall'


const SForm= withInstall(Form)
const SFormItem = withInstall(FormItem)


export {
  SForm,
  SFormItem
}

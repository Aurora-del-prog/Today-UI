import { withInstall } from '../withInstall';
import { createMessage as Message } from './src/method'
import type { App } from "vue";

const message = (Message as any).install = function (app: App) {
  app.config.globalProperties.$message = Message;
};
const SMessage = withInstall(message)

export default SMessage;
export {
  Message
}




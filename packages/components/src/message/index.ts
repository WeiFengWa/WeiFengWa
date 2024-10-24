import { withInstallFunction } from '@weifengwa/utils/src/install'
import Message from './methods'

export const WfMessage = withInstallFunction(Message, '$message')

export default WfMessage

export * from './methods'

declare module 'vue' {
  interface GlobalComponents {
    WfMessage: typeof WfMessage
  }
}

import { withInstallFunction } from '@weifengwa/utils/install'
import Message from './src/methods'

export const WfMessage = withInstallFunction(Message, '$message')

export default WfMessage

export * from './src/methods'

declare module 'vue' {
  interface GlobalComponents {
    WfMessage: typeof WfMessage
  }
}

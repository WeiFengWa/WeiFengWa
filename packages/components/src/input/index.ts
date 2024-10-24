import { withInstall } from '@weifengwa/utils'
import _Input from './input.vue'

export const WfInput = withInstall(_Input)

export default WfInput

export * from './input'

declare module 'vue' {
  export interface GlobalComponents {
    WfInput: typeof WfInput
  }
}

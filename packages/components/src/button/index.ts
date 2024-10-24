import _Button from './button.vue'
import { withInstall } from '@weifengwa/utils/src/install'

export const WfButton = withInstall(_Button)

export default WfButton

export * from './button'

declare module 'vue' {
  interface GlobalComponents {
    WfButton: typeof WfButton
  }
}

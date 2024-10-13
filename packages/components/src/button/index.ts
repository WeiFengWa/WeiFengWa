import _Button from './button.vue'
import _ButtonGroup from './button-group.vue'
import { withInstall } from '@weifengwa/utils/install'

export const WfButton = withInstall(_Button)

export const WfButtonGroup = withInstall(_ButtonGroup)

export default WfButton

export * from './button'

declare module 'vue' {
  interface GlobalComponents {
    WfButton: typeof WfButton
  }
}

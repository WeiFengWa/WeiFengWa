import _Button from './src/button.vue'
import _ButtonGroup from './src/button-group.vue'
import { withInstall } from '@weifengwa/utils/install'

export const WfButton = withInstall(_Button)

export const WfButtonGroup = withInstall(_ButtonGroup)

export default WfButton

export * from './src/button'

declare module 'vue' {
  interface GlobalComponents {
    WfButton: typeof WfButton
  }
}

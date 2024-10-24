import _ButtonGroup from './button-group.vue'
import { withInstall } from '@weifengwa/utils/src/install'

export const WfButtonGroup = withInstall(_ButtonGroup)

export default WfButtonGroup

export * from './button-group'

declare module 'vue' {
  interface GlobalComponents {
    WfButtonGroup: typeof WfButtonGroup
  }
}

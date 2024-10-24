import { withInstall } from '@weifengwa/utils'
import _RadioGroup from './radio-group.vue'

export const WfRadioGroup = withInstall(_RadioGroup)
export default WfRadioGroup
export * from './radio-group'

declare module 'vue' {
  export interface GlobalComponents {
    WfRadioGroup: typeof WfRadioGroup
  }
}

import { withInstall } from '@weifengwa/utils'
import _Checkbox from './checkbox.vue'

export const WfCheckbox = withInstall(_Checkbox)

export default WfCheckbox

export * from './checkbox'

declare module 'vue' {
  export interface GlobalComponents {
    WfCheckbox: typeof WfCheckbox
  }
}

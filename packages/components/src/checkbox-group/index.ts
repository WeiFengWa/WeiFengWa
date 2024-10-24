import { withInstall } from '@weifengwa/utils'
import _CheckboxGroup from './checkbox-group.vue'

export const WfCheckboxGroup = withInstall(_CheckboxGroup)

export default WfCheckboxGroup

export * from './checkbox-group'

declare module 'vue' {
  export interface GlobalComponents {
    WfCheckboxGroup: typeof WfCheckboxGroup
  }
}

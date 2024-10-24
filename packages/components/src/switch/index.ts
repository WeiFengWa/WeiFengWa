import _Switch from './switch.vue'
import { withInstall } from '@weifengwa/utils/src/install'

export const WfSwitch = withInstall(_Switch)

export default WfSwitch

export * from './switch'

declare module 'vue' {
  interface GlobalComponents {
    WfSwitch: typeof WfSwitch
  }
}

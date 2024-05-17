import _Switch from './src/switch.vue'
import { withInstall } from '@weifengwa/utils/install'

export const WfSwitch = withInstall(_Switch)

export default WfSwitch

export * from './src/switch'

declare module 'vue' {
  interface GlobalComponents {
    WfSwitch: typeof WfSwitch
  }
}

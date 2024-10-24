import { withInstall } from '@weifengwa/utils/src/install'
import _Space from './space.vue'

export const WfSpace = withInstall(_Space)

export default WfSpace

export * from './space'

declare module 'vue' {
  interface GlobalComponents {
    WfSpace: typeof WfSpace
  }
}

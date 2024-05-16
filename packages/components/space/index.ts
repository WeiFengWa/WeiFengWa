import { withInstall } from '@weifengwa/utils/install'
import _Space from './src/space.vue'

export const WfSpace = withInstall(_Space)

export default WfSpace

export * from './src/space'

declare module 'vue' {
  interface GlobalComponents {
    WfSpace: typeof WfSpace
  }
}

import _Icon from './icon.vue'
import { withInstall } from '@weifengwa/utils/src/install'

export const WfIcon = withInstall(_Icon)

export default WfIcon

export * from './icon'

declare module 'vue' {
  interface GlobalComponents {
    // 我们的接口可以自动合并
    WfIcon: typeof WfIcon
  }
}

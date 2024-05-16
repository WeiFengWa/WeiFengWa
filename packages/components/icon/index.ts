import _Icon from './src/icon.vue'
import { withInstall } from '@weifengwa/utils/install'

export const WfIcon = withInstall(_Icon)

export default WfIcon

export * from './src/icon'

declare module 'vue' {
  interface GlobalComponents {
    // 我们的接口可以自动合并
    WfIcon: typeof WfIcon
  }
}

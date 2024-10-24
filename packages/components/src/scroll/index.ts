import _Scroll from './scroll.vue'
import { withInstall } from '@weifengwa/utils/src/install'

export const WfScroll = withInstall(_Scroll)

export default WfScroll

export * from './scroll'

declare module 'vue' {
  interface GlobalComponents {
    WfScroll: typeof WfScroll
  }
}

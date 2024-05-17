import _Scroll from './src/scroll.vue'
import { withInstall } from '@weifengwa/utils/install'

export const WfScroll = withInstall(_Scroll)

export default WfScroll

export * from './src/scroll'

declare module 'vue' {
  interface GlobalComponents {
    WfScroll: typeof WfScroll
  }
}

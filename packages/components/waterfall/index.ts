import _Waterfall from './src/waterfall.vue'
import { withInstall } from '@weifengwa/utils/install'

export const WfWaterfall = withInstall(_Waterfall)

export default WfWaterfall

export * from './src/waterfall'

declare module 'vue' {
  interface GlobalComponents {
    WfWaterfall: typeof WfWaterfall
  }
}

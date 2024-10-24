import { withInstall } from '@weifengwa/utils'
import _Radio from './radio.vue'

export const WfRadio = withInstall(_Radio)

export default WfRadio

export * from './radio'

declare module 'vue' {
  export interface GlobalComponents {
    WfRadio: typeof WfRadio
  }
}

import { withInstall } from '@weifengwa/utils/install'
import _Dialog from './dialog.vue'

export const WfDialog = withInstall(_Dialog)

export default WfDialog

export * from './dialog'

declare module 'vue' {
  interface GlobalComponents {
    WfDialog: typeof WfDialog
  }
}

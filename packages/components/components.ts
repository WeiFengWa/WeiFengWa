import { Plugin } from 'vue'
import { WfIcon } from './src/icon'
import { WfButton, WfButtonGroup } from './src/button'
import { WfSpace } from './src/space'
import { WfScroll } from './src/scroll'
import { WfSwitch } from './src/switch'
import { WfDialog } from './src/dialog'
import { WfCollapseTransition } from './src/collapse-transition'
import { WfWaterfall } from './src/waterfall'

export default [
  WfIcon,
  WfButton,
  WfButtonGroup,
  WfSpace,
  WfScroll,
  WfSwitch,
  WfDialog,
  WfCollapseTransition,
  WfWaterfall
] as Plugin[]

// export {
//   WfIcon,
//   WfButton,
//   WfButtonGroup,
//   WfSpace,
//   WfScroll,
//   WfSwitch,
//   WfDialog,
//   WfCollapseTransition
// }

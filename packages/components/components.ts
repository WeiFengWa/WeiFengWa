import { Plugin } from 'vue'
import { WfIcon } from './icon'
import { WfButton, WfButtonGroup } from './button'
import { WfSpace } from './space'
import { WfScroll } from './scroll'
import { WfSwitch } from './switch'
import { WfDialog } from './dialog'
import { WfCollapseTransition } from './collapse-transition'

export default [
  WfIcon,
  WfButton,
  WfButtonGroup,
  WfSpace,
  WfScroll,
  WfSwitch,
  WfDialog,
  WfCollapseTransition
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

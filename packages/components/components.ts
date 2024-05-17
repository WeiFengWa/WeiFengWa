import { Plugin } from 'vue'
import { WfIcon } from './icon'
import { WfButton, WfButtonGroup } from './button'
import { WfSpace } from './space'
import { WfScroll } from './scroll'

export default [WfIcon, WfButton, WfButtonGroup, WfSpace, WfScroll] as Plugin[]

export { WfIcon, WfButton, WfButtonGroup, WfSpace }

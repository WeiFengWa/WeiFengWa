import { Plugin } from 'vue'
import { WfIcon } from './icon'
import { WfButton, WfButtonGroup } from './button'
import { WfSpace } from './space'

export default [WfIcon, WfButton, WfButtonGroup, WfSpace] as Plugin[]

export { WfIcon, WfButton, WfButtonGroup, WfSpace }

import { makeInstaller } from './mark-installer'
import Components from './components'
import Plugins from './plugins'

export default makeInstaller([...Components, ...Plugins])

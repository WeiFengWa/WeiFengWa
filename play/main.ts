import { createApp } from 'vue'
import App from './app.vue'
import WfIcon from '@weifengwa/components/icon'
import WfButton from '@weifengwa/components/button'
import '@weifengwa/theme-tailwind/src/style.css'

const plugins = [WfIcon, WfButton]

const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))
app.mount('#app')

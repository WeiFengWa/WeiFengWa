import { createApp } from 'vue'
import App from './app.vue'
import weifengwa from '@weifengwa/components/index'
import '@weifengwa/styles/src/index.css'

const app = createApp(App)
app.use(weifengwa)
app.mount('#app')

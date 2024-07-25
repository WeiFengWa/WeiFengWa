import { createApp } from 'vue'
import App from './app.vue'
import weifengwa from '@weifengwa/components/index'
import '@weifengwa/styles/src/index.css'

const app = createApp(App)
app.use(weifengwa)
app.directive('lazy', {
  mounted(el, binding) {
    const { img } = binding.value
    const observer = new IntersectionObserver(entries => {
      // 如果 intersectionRatio 为 0，则目标在视野外，
      // 我们不需要做任何事情。
      if (entries[0].intersectionRatio <= 0) return
      console.log(123131)
      setTimeout(() => {
        // el.src = img
        observer.unobserve(el)
      }, 1000)
    })
    observer.observe(el)
  }
})
app.mount('#app')

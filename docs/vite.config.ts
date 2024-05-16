import { defineConfig } from 'vite'
import defineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [defineOptions()]
})

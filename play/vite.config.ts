import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import defineOptions from 'unplugin-vue-define-options/vite'
// import Components from 'unplugin-vue-components/vite'
// import { WeiFengWaResolver } from '@weifengwa/components/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    defineOptions(),
    // Components({
    //   resolvers: [
    //     // WeiFengWaResolver()
    //     // (name: string) => {
    //     //   if (name.startsWith('Wf')) {
    //     //     const partialName = name.slice(2)
    //     //     return {
    //     //       name: `Wf${partialName}`,
    //     //       from: `@weifengwa/components/src/${partialName.toLowerCase()}`
    //     //       // sideEffects: `@weifengwa/styles/src/${partialName.toLowerCase()}.css`
    //     //     }
    //     //   }
    //     // }
    //   ]
    // })
  ]
})

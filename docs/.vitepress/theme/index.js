import DefaultTheme from 'vitepress/theme'
import '../../index.css'
import weifengwa from '@weifengwa/components/index'
import '@weifengwa/styles/src/common.css'
// import { vuePlugin } from 'vitepress-demo-editor'
// import 'vitepress-demo-editor/dist/style.css'

const plugins = [weifengwa]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    plugins.forEach(plugin => app.use(plugin))
    // // 在 vitepress 中,注册全局组件
    // app.use(vuePlugin, {
    //   defaultDirection: 'row', // 默认显示方向
    //   ms: 30, // 编辑器防抖时间
    //   handleError(errs) {}, // 错误信息
    //   onMonacoCreated(monaco) {} // monaco 创建成功时触发
    // })
  }
}

import DefaultTheme from 'vitepress/theme'
import { globals } from '../components/index'
import '../../index.css'

import weifengwa from '@weifengwa/components/index'
import '@weifengwa/styles/src/common.css'

// highlight 的样式，依赖包，组件
import 'highlight.js/styles/androidstudio.css'
import hljsVuePlugin from "@highlightjs/vue-plugin"
import 'highlight.js/lib/common'

const plugins = [weifengwa]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(hljsVuePlugin)
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
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

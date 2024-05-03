import * as components from '@weifengwa/components'
import type { App } from 'vue' // ts中的优化只获取类型

const install = (app: App) => {
  for (const comkey in components) {
    app.component((components as any)[comkey].name, (components as any)[comkey])
  }
}

export default {
  install
}

export * from '@weifengwa/components'

import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function withInstall<T>(comp: T) {
  const { name } = comp as unknown as { name: string }
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    app.component(name, comp as SFCWithInstall<T>) // 注册全局组件
  }
  return comp as SFCWithInstall<T>
}

import type { App, Plugin, AppContext, Directive } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export function withInstall<T>(comp: T) {
  const { name } = comp as unknown as { name: string }
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    app.component(name, comp as SFCWithInstall<T>) // 注册全局组件
  }
  return comp as SFCWithInstall<T>
}

export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    ;(fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }

  return fn as SFCInstallWithContext<T>
}

export const withInstallDirective = <T extends Directive>(
  directive: T,
  name: string
) => {
  ;(directive as SFCWithInstall<T>).install = (app: App): void => {
    app.directive(name, directive)
  }

  return directive as SFCWithInstall<T>
}

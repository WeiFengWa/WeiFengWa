declare module 'vue' {
  export interface GlobalComponents {
    WfIcon: typeof import('@weifengwa/components')['WfIcon']
    WfButton: typeof import('@weifengwa/components')['WfButton']
  }

  interface ComponentCustomProperties {}
}

export {}

export function WeiFengWaResolver() {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('wf')) {
        const partialName = name.slice(2)
        return {
          name: 'wf' + partialName,
          from: 'weifengwa',
          sideEffects: `weifengwa/theme/${partialName}.css`
        }
      }
    }
  }
}

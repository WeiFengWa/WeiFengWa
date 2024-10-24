// const type: 'component' | 'directive' = 'component' // 正确

// export const WeiFengWaResolver = () => {
//   return {
//     type,
//     resolve: (name: string) => {
//       if (name.startsWith('wf')) {
//         const partialName = name.slice(2)
//         return {
//           name: 'wf' + partialName,
//           from: `weifengwa`,
//           sideEffects: `weifengwa/styles/${partialName}.css`
//         }
//       }
//     }
//   }
// }

export const WeiFengWaResolver = () => (name: string) => {
  if (name.startsWith('Wf')) {
    const partialName = name.replace('Wf', '').replace(/([a-z])([A-Z])/g, '$1-$2')
    return {
      name: `Wf${partialName}`,
      from: `@weifengwa/components/src/${partialName.toLowerCase()}`,
      sideEffects: `@weifengwa/styles/src/${partialName.toLowerCase()}.css`
    }
  }
}

export default WeiFengWaResolver

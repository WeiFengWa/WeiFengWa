export function WeiFengWaResolver() {
    return {
        type: 'component',
        resolve: (name) => {
            if (name.startsWith('wf')) {
                const partialName = name.slice(2);
                return {
                    name: 'wf' + partialName,
                    from: 'weifengwa',
                    sideEffects: `weifengwa/theme/${partialName}.css`
                };
            }
        }
    };
}

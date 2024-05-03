"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeiFengWaResolver = void 0;
function WeiFengWaResolver() {
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
exports.WeiFengWaResolver = WeiFengWaResolver;

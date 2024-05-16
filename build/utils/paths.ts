import path from 'path'

// 根目录
export const projectRoot = path.resolve(__dirname, '../../')
// dist目录
export const outDir = path.resolve(__dirname, '../../dist')
// weifengwa 入口 index.ts
export const weifengRoot = path.resolve(__dirname, '../../packages/weifengwa')
// 组件目录
export const componentRoot = path.resolve(projectRoot, 'packages/components')
// 样式目录
export const styleRoot = path.resolve(projectRoot, 'packages/styles')

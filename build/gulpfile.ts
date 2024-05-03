import { series, parallel } from 'gulp'
// 打包方式：串行（series）、并行（parallel）
import { genEntryTypes } from './entry-types'
import { run, withTaskName } from './utils'
import { outDir, weifengRoot } from './utils/paths'

/**
 * 1. 打包样式
 * 2. 打包工具方法
 * 3. 打包所有组件
 * 4. 打包每个组件
 * 5. 生成一个组件库
 * 6. 发布组件
 */

// 清除根目录下已经打包的 dist
const cleanDist = withTaskName('clean', async () => run('rm -rf ./dist'))

// 执行 packages 目录中 package.json 配置有 build 的对应命令脚本
const buildPackages = withTaskName('buildPackages', async () =>
  // 注意这里 --filter ./packages，在 pnpm7.6.0 中是找不到 packages 下的项目的，有 bug
  run('pnpm run --filter ./packages/** --parallel build')
)

// 处理 packages/components 的所有组件成一个文件
const buildFullComponent = withTaskName('buildFullComponent', async () =>
  // 会去找 full-component.ts 中 buildFullComponent
  run('pnpm run build buildFullComponent')
)

// buildFullComponent 函数在 full-component.ts 中
export * from './full-component'

// 引用我们组件时，打包按需加载的多个文件组件
const buildSingleComponent = withTaskName('buildComponent', () =>
  // 会去找 component.ts 中 buildComponent
  run('pnpm run build buildComponent')
)

// buildComponent 函数在 component.ts 中
export * from './component'

// 拷贝 package.json
const copySourceCode = () => async () => {
  await run(`cp ${weifengRoot}/package.json ${outDir}/package.json`)
}

export default series(
  cleanDist,
  buildPackages,
  buildFullComponent,
  buildSingleComponent,
  parallel(genEntryTypes, copySourceCode())
)

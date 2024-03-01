import { series, parallel } from 'gulp'
import { genEntryTypes } from './entry-types'
import { run, withTaskName } from './utils'
import { outDir, weifengRoot } from './utils/paths'

// 清除根目录下已经打包的 dist
const cleanDist = withTaskName('clean', async () => run('rm -rf ./dist'))

// 执行 packages 目录中 package.json 配置有 build 的对应命令脚本
const buildPackages = withTaskName('buildPackages', async () =>
  // 注意这里 --filter ./packages，在 pnpm7.6.0 中是找不到 packages 下的项目的，有 bug
  run('pnpm run --filter ./packages --parallel build')
)

// 处理 packages/components 的所有组件成一个文件
const buildAllComponent = withTaskName('buildFullComponent', async () =>
  // 会去找 full-component.ts 中 buildFullComponent
  run('pnpm run build buildFullComponent')
)

// 引用我们组件时，打包按需加载的多个文件组件
const buildSingleComponent = withTaskName('buildComponent', () =>
  // 会去找 component.ts 中 buildComponent
  run('pnpm run build buildComponent')
)

// buildFullComponent 函数在 full-component.ts 中
export * from './full-component'

// buildComponent 函数在 component.ts 中
export * from './component'

// 拷贝 package.json
const copySourceCode = () => async () => {
  await run(`cp ${weifengRoot}/package.json ${outDir}/package.json`)
}

export default series(
  cleanDist,
  buildPackages,
  buildAllComponent,
  buildSingleComponent,
  parallel(genEntryTypes),
  copySourceCode()
)

import path from 'path'
import { series, parallel, src, dest } from 'gulp'
import ts from 'gulp-typescript'

import { withTaskName } from './utils'
import { buildConfig } from './utils/config'
import { outDir, projectRoot } from './utils/paths'

// 专门打包util、指令、hook的
export const buildPackages = (dirname: string, name: string) => {
  console.log('---------------buildPackages------------------------')

  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const output = path.resolve(dirname, config.output.name)

    const build = withTaskName(`build:${name || dirname}`, () => {
      const tsConfig = path.resolve(projectRoot, 'tsconfig.json') // ts 的配置文件路径
      const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules']
      return src(inputs)
        .pipe(
          ts.createProject(tsConfig, {
            declaration: true, // 需要生成声明文件
            strict: false, // 严格模式
            module: config.module
          })()
        )
        .pipe(dest(output))
    })

    const copy = withTaskName(`copy:${name || dirname}`, () => {
      // 将 utils 模块编译 ts 后的 js 拷贝到 dist 目录下的 es 目录和 lib 目录
      return src(`${output}/**`).pipe(
        dest(path.resolve(outDir, config.output.name, name))
      )
    })
    return series(build, copy)
  })
  // 将 ts -> js, 也可以使用 rullup 处理
  return parallel(...tasks)
}

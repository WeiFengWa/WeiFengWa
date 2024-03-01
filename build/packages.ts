import { series, parallel, src, dest } from 'gulp'
import { buildConfig } from './utils/config'
import path from 'path'
import { outDir, projectRoot } from './utils/paths'
import ts from 'gulp-typescript'
import { withTaskName } from './utils'

// 专门打包util、指令、hook的

export const buildPackages = (dirname: string, name: string) => {
  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const output = path.resolve(dirname, config.output.name)
    return series(
      withTaskName(`build:${name || dirname}`, () => {
        const tsConfig = path.resolve(projectRoot, 'tsconfig.json') // ts 的配置文件路径
        const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules']
        return src(inputs)
          .pipe(
            ts.createProject(tsConfig, {
              declaration: true, // 需要生成配置文件
              strict: false, // 严格模式
              module: config.module
            })()
          )
          .pipe(dest(output))
      }),
      withTaskName(`copy:${name || dirname}`, () => {
        return src(`${output}/**`).pipe(
          dest(path.resolve(outDir, config.output.name, name))
        )
      })
    )
  })
  return parallel(...tasks)
}

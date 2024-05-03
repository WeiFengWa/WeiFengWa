import path from 'path'
import fs from 'fs/promises'
import { series, parallel } from 'gulp'
import glob, { sync } from 'fast-glob'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { OutputOptions, rollup } from 'rollup'
import { terser } from 'rollup-plugin-terser' // 压缩js代码
import cleanup from 'rollup-plugin-cleanup' // 去除无效代码

import { Project, SourceFile } from 'ts-morph'
import * as VueCompiler from '@vue/compiler-sfc'

import { componentRoot, outDir, projectRoot } from './utils/paths'
import { buildConfig } from './utils/config'
import { pathRewriter, run } from './utils'

const buildEachComponent = async () => {
  console.log('------------------buildEachComponent-------------------')
  // 打包每个组件
  // 查找components下所有的组件目录 ["icon"]
  const files = sync('*', {
    cwd: componentRoot,
    onlyDirectories: true // 只查找文件夹
  })

  // 分别把 components 文件夹下的组件,放到 dist/es/components 下 和 dist/lib/compmonents
  const builds = files.map(async (file: string) => {
    // 每个组件的入口
    const input = path.resolve(componentRoot, file, 'index.ts')

    const config = {
      input,
      plugins: [
        nodeResolve(),
        vue({
          preprocessStyles: false
        }),
        typescript(),
        commonjs()
      ],
      external: (id: string) => /^vue/.test(id) || /^@weifengwa/.test(id) // 排除掉vue和@weifengwa的依赖
    }

    const bundle = await rollup(config)

    const options = Object.values(buildConfig).map(config => ({
      format: config.format,
      file: path.resolve(config.output.path, `components/${file}/index.js`),
      paths: pathRewriter(config.output.name), // @weifengwa => weifengwa/es  yun/lib

      // 视情况，是否配置，否在会包报警告 Use `output.exports: "named"` to disable this warning
      // name: 'weifengwa', // 全局的名字
      exports: 'named' // 导出的名字用命名的方式导出 liraryTarget:"var"  var name = "xxx"
    }))

    await Promise.all(
      options.map(option => bundle.write(option as OutputOptions))
    )
  })

  return Promise.all(builds)
}

// 生成 ts 的 type 文件
const genTypes = async () => {
  console.log('----------------genTypes--------------------')

  const project = new Project({
    // 生成 .d.ts,需要有一个 tsconfig.json
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      outDir: path.resolve(outDir, 'types'),
      baseUrl: projectRoot,
      paths: {
        '@weifengwa/*': ['packages/*']
      },
      skipLibCheck: true,
      strict: false
    },
    tsConfigFilePath: path.resolve(projectRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true
  })

  const filePaths = await glob('**/*', {
    // ** 任意目录  * 任意文件
    cwd: componentRoot,
    onlyFiles: true,
    absolute: true
  })

  const sourceFiles: SourceFile[] = []

  await Promise.all(
    filePaths.map(async function (file) {
      if (file.endsWith('.vue')) {
        const content = await fs.readFile(file, 'utf8')
        const sfc = VueCompiler.parse(content)
        const { script } = sfc.descriptor

        if (script) {
          const content = script.content // 拿到脚本  icon.vue.ts  => icon.vue.d.ts
          const sourceFile = project.createSourceFile(file + '.ts', content)
          sourceFiles.push(sourceFile)
        }
      } else {
        // 把所有的 ts 文件都放在一起发射成 .d.ts 文件
        const sourceFile = project.addSourceFileAtPath(file)
        sourceFiles.push(sourceFile)
      }
    })
  )

  await project.emit({
    emitOnlyDtsFiles: true // 默认是放到内存中的
  })

  const tasks = sourceFiles.map(async (sourceFile: any) => {
    const emitOutput = sourceFile.getEmitOutput()
    const tasks = emitOutput.getOutputFiles().map(async (outputFile: any) => {
      const filepath = outputFile.getFilePath()
      await fs.mkdir(path.dirname(filepath), {
        recursive: true
      })
      // @weifengwa -> weifengwa/es -> .d.ts 不用去 lib 下查找
      await fs.writeFile(filepath, pathRewriter('es')(outputFile.getText()))
    })
    await Promise.all(tasks)
  })

  await Promise.all(tasks)
}

const copyTypes = () => {
  console.log('----------------copyTypes--------------------')

  const src = path.resolve(outDir, 'types/components/')

  const copy = (module: string) => {
    const output = path.resolve(outDir, module, 'components')
    return () => run(`cp -r ${src}/* ${output}`)
  }

  return parallel(copy('es'), copy('lib'))
}

const buildComponentEntry = async () => {
  console.log('----------------buildComponentEntry--------------------')
  const config = {
    input: path.resolve(componentRoot, 'index.ts'),
    plugins: [
      typescript(),
      cleanup(),
      terser({ compress: { drop_console: true } }) // 压缩js代码 及删除console
    ],
    external: () => true
  }

  const bundle = await rollup(config)

  return Promise.all(
    Object.values(buildConfig)
      .map(config => ({
        format: config.format,
        file: path.resolve(config.output.path, 'components/index.js'),
        exports: 'named'
      }))
      .map(config => bundle.write(config as OutputOptions))
  )
}

export const buildComponent = series(
  buildEachComponent,
  genTypes,
  copyTypes(),
  buildComponentEntry
)

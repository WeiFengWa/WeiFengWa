import path from 'path'
import fs from 'fs/promises'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { parallel } from 'gulp'
import { OutputOptions, rollup } from 'rollup'
import { terser } from 'rollup-plugin-terser'
import cleanup from 'rollup-plugin-cleanup'

import { outDir, weifengRoot } from './utils/paths'
import { buildConfig } from './utils/config'
import { pathRewriter } from './utils'

const buildFull = async () => {
  console.log('-----------------buildFull------------------------')
  // rollup打包的配置信息
  const config = {
    input: path.resolve(weifengRoot, 'index.ts'), // 打包入口
    plugins: [
      nodeResolve(),
      typescript(),
      vue({
        preprocessStyles: false
      }),
      commonjs(),
      cleanup(),
      terser({ compress: { drop_console: true } }) // 压缩js代码 及删除console
    ],
    external: (id: string) => /^vue/.test(id) // 打包的时候不打包vue代码
  }

  // 组件库两种使用方式 import 导入组件库 在浏览器中使用script

  // esm umd

  const buildConfig = [
    {
      format: 'umd', // 打包的格式
      file: path.resolve(outDir, 'index.js'),
      name: 'weifengwa', // 全局的名字
      exports: 'named', // 导出的名字用命名的方式导出 liraryTarget:"var"  var name = "xxx"
      globals: {
        // 表示使用的 vue 是全局的
        vue: 'Vue'
      }
    },
    {
      format: 'esm',
      file: path.resolve(outDir, 'index.esm.js')
    }
  ]

  const bundle = await rollup(config)

  return Promise.all(
    buildConfig.map(config => bundle.write(config as OutputOptions))
  )
}

const buildEntry = async () => {
  console.log('-----------------buildEntry------------------------')
  // 读取weifengwa目录下的所有内容，包括目录和文件
  const entryFiles = await fs.readdir(weifengRoot, { withFileTypes: true })
  // 过滤掉 不是文件的内容和package.json文件  index.ts 作为打包入口
  const entryPoints = entryFiles
    .filter(f => f.isFile())
    .filter(f => !['package.json'].includes(f.name))
    .map(f => path.resolve(weifengRoot, f.name))

  const config = {
    input: entryPoints,
    plugins: [
      nodeResolve(),
      vue(),
      typescript(),
      cleanup(),
      terser({ compress: { drop_console: true } }) // 压缩js代码 及删除console
    ],
    external: (id: string) => /^vue/.test(id) || /^@weifengwa/.test(id)
  }

  const bundle = await rollup(config)

  return Promise.all(
    Object.values(buildConfig)
      .map(config => ({
        format: config.format,
        dir: config.output.path,
        paths: pathRewriter(config.output.name),

        // 视情况，是否配置，否在会包报警告 Use `output.exports: "named"` to disable this warning
        // name: 'weifengwa', // 全局的名字
        exports: 'named' // 导出的名字用命名的方式导出 liraryTarget:"var"  var name = "xxx"
      }))
      .map(option => bundle.write(option as OutputOptions))
  )
}

export const buildFullComponent = parallel(buildFull, buildEntry)

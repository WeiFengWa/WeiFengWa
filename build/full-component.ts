import path from 'path'
import fs from 'fs/promises'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { parallel } from 'gulp'
import { OutputOptions, rollup } from 'rollup'

import { outDir, weifengRoot } from './utils/paths'
import { buildConfig } from './utils/config'
import { pathRewriter } from './utils'

const buildFull = async () => {
  console.log('-----------------buildFull------------------------')
  // rollup打包的配置信息
  const config = {
    input: path.resolve(weifengRoot, 'index.ts'), // 打包的入口
    plugins: [nodeResolve(), typescript(), vue(), commonjs()],
    external: (id: string) => /^vue/.test(id) // 排除打包的时候不需要打包 vue 代码
  }

  const buildConfig = [
    {
      format: 'umd',
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

  const entryFiles = await fs.readdir(weifengRoot, { withFileTypes: true })

  const entryPoints = entryFiles
    .filter(f => f.isFile())
    .filter(f => !['package.json'].includes(f.name))
    .map(f => path.resolve(weifengRoot, f.name))

  const config = {
    input: entryPoints,
    plugins: [nodeResolve(), vue(), typescript()],
    external: (id: string) => /^vue/.test(id) || /^@yun/.test(id)
  }

  const bundle = await rollup(config)

  return Promise.all(
    Object.values(buildConfig)
      .map(config => ({
        format: config.format,
        dir: config.output.path,
        paths: pathRewriter(config.output.name),

        // 视情况，是否配置，否在会包报警告 Use `output.exports: "named"` to disable this warning
        name: 'weifengwa', // 全局的名字
        exports: 'named' // 导出的名字用命名的方式导出 liraryTarget:"var"  var name = "xxx"
      }))
      .map(option => bundle.write(option as OutputOptions))
  )
}

export const buildFullComponent = parallel(buildFull)

import { resolve } from 'path'
import { outDir } from './paths'

export const buildConfig = {
  esm: {
    module: 'ESNext', // tsconfig 输出的结果 ES6 模块
    format: 'esm', // 需要配置格式化化后的模块规范
    output: {
      name: 'es', // 打包到 dist 目录下的那个目录
      path: resolve(outDir, 'es')
    },
    bundle: {
      path: 'weifengwa/es'
    }
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    output: {
      name: 'lib',
      path: resolve(outDir, 'lib')
    },
    bundle: {
      path: 'weifengwa/lib'
    }
  }
}

export type BuildConfig = typeof buildConfig

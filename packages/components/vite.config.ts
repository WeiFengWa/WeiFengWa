import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { resolve } from 'path'
import postcss from 'postcss'
import { styleRoot, componentRoot, outDir } from '../../build/utils/paths'

export default defineConfig({
  build: {
    //打包文件目录
    // outDir: 'es',
    cssCodeSplit: true,
    emptyOutDir: true,
    //压缩
    //minify: false,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'WeiFengWa',
      formats: ['es', 'umd', 'cjs']
    },
    rollupOptions: {
      //忽略打包vue文件, /\.css/
      external: ['vue', '@iconify/vue', '@vueuse/core', /\.css/],
      input: ['index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: `${outDir}/es`,
          globals: {
            vue: 'Vue',
            '@iconify/vue': 'IconifyVue',
            '@vueuse/core': 'VueUse'
          }
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].cjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: `${outDir}/lib`
        }
      ]
    }
  },
  plugins: [
    vue(),
    dts({
      include: ['../components/**/*'],
      exclude: ['../components/**/vite.config.ts'],
      entryRoot: '../components',
      cleanVueFileName: true,
      // packages/components
      outDir: [`${outDir}/es/components`, `${outDir}/lib/components`]
      // outputDir: ['../dist/es/src', '../easyest/lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      // tsConfigFilePath: '../../tsconfig.json'
    }),
    DefineOptions(),
    {
      name: 'style',
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle)

        for (const key of keys) {
          const bundler: any = bundle[key as any]
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
          // console.log(bundler)
          if(key.indexOf('button') > -1) {
            console.log(bundler)
          }
          this.emitFile({
            type: 'asset',
            fileName: key, //文件名名不变
            source: bundler.code
              ?.replace(/@weifengwa\/components/g, 'weifengwa/es/components')
              ?.replace(/import\s+['"]@weifengwa\/styles\/src\/[^'"]+\.css['"];/g, '')
              ?.replace(/require\("@weifengwa\/styles\/src\/([a-zA-Z0-9_-]+)\.css"\);/g, '')
              ?.replace(/@weifengwa\/styles\/src/g, 'weifengwa/styles')
          })
        }
      }
    }
  ],
  css: {
    postcss: './postcss.config.js' // 确保使用正确的 PostCSS 配置
  }
  // resolve: {
  //   alias: [{ find: '@weifengwa/styles/src', replacement: 'weifengwa/styles' }]
  // }
})

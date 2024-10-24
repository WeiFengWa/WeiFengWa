import path from 'path'
import { series, src, dest } from 'gulp'

import gulpCleanCss from 'gulp-clean-css'
import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import postcssImport from 'postcss-import'
import postcss from 'gulp-postcss'
import concat from 'gulp-concat'
import autoprefixer from 'autoprefixer'
import { run, withTaskName } from '../../build/utils'
import {
  styleRoot,
  componentRoot,
  outDir,
  weifengRoot
} from '../../build/utils/paths'

function r(p: string) {
  return path.resolve(__dirname, p)
}

// tailwindcss 到 css
function tailwindToCss(p: string) {
  console.log('---------------buildCss------------------------')
  return src([r(p), '!' + r('./src/index.css')])
    .pipe(
      postcss([
        postcssImport(),
        nesting(),
        tailwindcss('./tailwind.config.js'),
        autoprefixer()
      ])
    )
    .pipe(gulpCleanCss())
    .pipe(dest(`${outDir}/styles`))
}

// 合并所有css
function mergeCss(p: string) {
  return src(r(p))
    .pipe(concat('index.css'))
    .pipe(gulpCleanCss())
    .pipe(dest(`${outDir}/styles`))
}

// 把编译好的 css 拷贝到根目录下 dist 中
const copyFullStyle = (p: string) => {
  return src(r(p)).pipe(dest(r(`${outDir}/styles`)))
}

// 把编译好的 css 拷贝到根目录下 dist 中
const copyPackage = (p: string) => {
  return src(r(p)).pipe(dest(r(outDir)))
}

export default series(
  withTaskName('clearOut', () => run('rm -rf ../dist', outDir)),
  withTaskName('buildComponents', () => run('vite build', componentRoot)),
  withTaskName('buildCommonCss', () => tailwindToCss(`${styleRoot}/src/common.css`)),
  // withTaskName('mergeCss', () => mergeCss(`${outDir}/es/styles/src/*.css`)),
  withTaskName('buildStyles', () => run('npm run build', styleRoot)),
  // withTaskName('rmEsStyles', () => run('cd es && rm -rf styles', outDir)),
  // withTaskName('rmLibStyles', () => run('cd lib && rm -rf styles', outDir)),
  withTaskName('copyPackage', () => copyPackage(`${weifengRoot}/package.json`))
)

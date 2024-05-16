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
import { styleRoot } from '../../build/utils/paths'

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
    .pipe(dest('./dist'))
}

// 合并所有css
function mergeCss(p: string) {
  return src(r(p))
    .pipe(concat('index.css'))
    .pipe(gulpCleanCss())
    .pipe(dest('./dist'))
}

// 把编译好的 css 拷贝到根目录下 dist 中
const copyFullStyle = (p: string) => {
  return src(r(p)).pipe(dest(r('../../dist/styles')))
}

export default series(
  withTaskName('cleanCss', () => run('rm -rf ./dist', styleRoot)),
  withTaskName('buildCss', () => tailwindToCss('./src/*.css')),
  withTaskName('mergeCss', () => mergeCss('./dist/*.css')),
  withTaskName('copyCss', () => copyFullStyle('./dist/**'))
)

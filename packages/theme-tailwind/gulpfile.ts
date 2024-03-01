import { series, src, dest } from 'gulp'
import tailwindcss from 'tailwindcss'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import path from 'path'
// import autoPrefixer from 'gulp-autoprefixer'
import autoprefixer from 'autoprefixer'
import gulpSass from 'gulp-sass'
import sass from 'sass'
import gulpCleanCss from 'gulp-clean-css'
import { run, withTaskName } from '../../build/utils'

function r(p: string) {
  return path.resolve(__dirname, p)
}

// tailwindcss 到 scss
function tailwindToScss(p: string) {
  return src(r(p))
    .pipe(postcss([tailwindcss('./tailwind.config.js'), autoprefixer()]))
    .pipe(rename({ extname: '.scss' }))
    .pipe(dest('./dist/scss'))
}

// scss 到 css
function scssToCss(p: string) {
  return src(r(p))
    .pipe(gulpSass(sass).sync())
    .pipe(gulpCleanCss())
    .pipe(dest('./dist/css'))
}

// 把编译好的 css 拷贝到根目录下 dist 中
const copyFullStyle = () => {
  return src(r('./dist/css/**')).pipe(dest(r('../../dist/theme')))
}

export default series(
  withTaskName('buildScss', () => tailwindToScss('./src/*.css')),
  withTaskName('buildCss', () => scssToCss('./dist/scss/*.scss')),
  withTaskName('copyCss', () => copyFullStyle())
)

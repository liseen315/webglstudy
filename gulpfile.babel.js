import gulp from 'gulp'
import clean from 'gulp-clean'
import gulpPlumber from 'gulp-plumber'
import typescript from 'gulp-typescript'
import notify from 'gulp-notify'
import replace from 'gulp-replace'
import open from 'opn'
import browserify from 'browserify'
import tsify from 'tsify'
import glob from 'glob'
import source from 'vinyl-source-stream'
import rename from 'gulp-rename'
import path from 'path'
import browserdef from 'browser-sync'

const browserSync = browserdef.create()

const tsconfig = require('./tsconfig.json')
const paths = {
  tsfile: 'src/**/*.ts',
  html: 'src/**/*.html'
};

const port = 2017
const uri = 'http://localhost:' + port

const tsProject = typescript.createProject('./tsconfig.json')

gulp.task('transpileTs', () => {
  glob(paths.tsfile,(err,files) => {
    if (err) return
    files.map(entry => {
      return browserify({basedir:'.', entries: [entry], cache: {}, packageCache: {},debug: true,})
      .plugin(tsify)
      .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
      })
      .bundle()
      .pipe(source(entry))
      .pipe(rename(path => {
        path.dirname = path.dirname.replace('src/','');
        path.extname = '.js';
      }))
      .pipe(gulp.dest('./bin'))
    })
  })
})

gulp.task('transpileHtml',()=>{
  return gulp.src(paths.html)
  .pipe(gulp.dest('./bin/'))
})

gulp.task('build',['transpileTs','transpileHtml'])

gulp.task('watch',['build'],()=>{
  gulp.watch(paths.tsfile,['transpileTs'])
  gulp.watch(paths.html,['transpileHtml'])
})


gulp.task('server',['build'],()=>{
  browserSync.init({
    files: ['bin/**/*'],
    server: {
      baseDir: "./bin"
    },
    browser: 'chrome',
    notify: false,
    port: port,
    open: false,
  },() => {
    open(uri)
  })
  gulp.watch(paths.tsfile,['transpileTs'],() => {

  })
  gulp.watch(paths.html,['transpileHtml'],() => {

  })
})
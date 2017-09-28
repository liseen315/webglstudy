import gulp from 'gulp'
import express from 'express'
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

const tsconfig = require('./tsconfig.json')
const paths = {
  tsfile: 'src/**/*.ts',
  html: 'src/**/*.html'
};

const app = express();
app.use(express.static('bin'))

const port = 2017
const uri = 'http://localhost:' + port

const tsProject = typescript.createProject('./tsconfig.json')

const cleanGlob = (glob) => {
  return () => {
    return gulp.src(glob, { read: false })
      .pipe(clean({ force: true }))
  }
}

gulp.task('clean-script',cleanGlob(['./bin/**/*.js','./bin/**/*.ts']))
gulp.task('clean-html',cleanGlob(['./bin/**/*.html']))

// gulp.task('transpileTs',['clean-script'],()=>{
//   return gulp.src(paths.tsfile)
//   .pipe(gulpPlumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
//   .pipe(tsProject())
//   .pipe(replace(/process\.env\.([a-zA-Z_]+)?( |,|;|\))/gi, (envCall, envKey, closer) => {
//     return `'${process.env[envKey]}'${closer}`;
//   }))
//   .pipe(gulp.dest('./bin/'));
// });

gulp.task('transpileTs',['clean-script'], () => {
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

gulp.task('transpileHtml',['clean-html'],()=>{
  return gulp.src(paths.html)
  .pipe(gulp.dest('./bin/'))
})

gulp.task('build',['transpileTs','transpileHtml'])

gulp.task('watch',['build'],()=>{
  gulp.watch(paths.tsfile,['transpileTs'])
  gulp.watch(paths.html,['transpileHtml'])
})

gulp.task('server',['watch'],()=>{
  //启动服务器
  app.listen(port,(err)=> {
    if(err){
      console.log(err)
      return
    }
    open(uri)
  })
})
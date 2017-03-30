import gulp from 'gulp';
import express from 'express';
import clean from 'gulp-clean';
import gulpPlumber from 'gulp-plumber';
import typescript from 'gulp-typescript';
import notify from 'gulp-notify';
import replace from 'gulp-replace';
import open from 'opn';


const tsconfig = require('./tsconfig.json');
const paths = {
  tsfile: 'src/**/*.ts',
  html: 'src/**/*.html'
};

const app = express();
app.use(express.static('bin'));

const port = 2017;
const uri = 'http://localhost:' + port;

const tsProject = typescript.createProject('./tsconfig.json');

const cleanGlob = (glob) => {
  return () => {
    return gulp.src(glob, { read: false })
      .pipe(clean({ force: true }));
  };
};

gulp.task('clean-script',cleanGlob(['./bin/**/*.js','./bin/**/*.ts']));
gulp.task('clean-html',cleanGlob(['./bin/**/*.html']));

gulp.task('transpileTs',['clean-script'],()=>{
  return gulp.src(paths.tsfile)
  .pipe(gulpPlumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
  .pipe(tsProject())
  .pipe(replace(/process\.env\.([a-zA-Z_]+)?( |,|;|\))/gi, (envCall, envKey, closer) => {
    return `'${process.env[envKey]}'${closer}`;
  }))
  .pipe(gulp.dest('./bin/'));
});

gulp.task('transpileHtml',['clean-html'],()=>{
  return gulp.src(paths.html)
  .pipe(gulp.dest('./bin/'));
});

gulp.task('build',['transpileTs','transpileHtml']);

gulp.task('watch',['build'],()=>{
  gulp.watch(paths.tsfile,['transpileTs']);
  gulp.watch(paths.html,['transpileHtml']);
});

gulp.task('server',['watch'],()=>{
  //启动服务器
  app.listen(port,(err)=> {
    if(err){
      console.log(err);
      return;
    }
    open(uri);
  });
});
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

/*
 * Variables
 */
var scssFiles = './src/assets/scss/*.scss';
var cssDest = './static/css';

var sassDevOptions = {
  outputStyle: 'expanded'
}
var sassProdOptions = {
  outputStyle: 'compressed'
}

/*
 * Tasks
 */
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('bootstrap.min.css'))
    .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function() {
  gulp.watch(scssFiles, ['sassdev', 'sassprod']);
});

gulp.task('default', ['sassdev', 'sassprod', 'watch']);

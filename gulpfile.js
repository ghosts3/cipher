const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(gulp.dest('./public_html/css/'))
}

function html() {
  return gulp.src('./pug/*.pug')
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest('./public_html/'));
}

function watch() {
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./pug/**/*.pug', html);
}

exports.html = html;
exports.style = style;
exports.watch = watch;
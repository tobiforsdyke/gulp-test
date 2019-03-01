var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");

// SASS TASK - converts all scss documents to css
gulp.task(
  'sass', function() {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(rename('style.readable.css'))
      .pipe(gulp.dest('./css'));
  }
);

// CSS TASK - minifies the readable css
gulp.task(
  'css', function(done) {
    gulp.src('./css/style.readable.css')
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./css'));
      done();
  }
);

// AUTOPREFIXER TASK
// gulp.task(
//   'autoprefixer', () =>
//     gulp.src('./css/*.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('./dist2'))
// );

// RUN TASK
gulp.task('run', gulp.series('sass', 'css'));

// WATCH TASK
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./css/**/*.css', gulp.series('css'));
});

// DEFAULT TASK - runs both the run task (sass and css) and the watch task
gulp.task('default', gulp.series('run', 'watch'));

var gulp = require('gulp');
var sass = require('gulp-sass');
// var uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

// SASS TASK - incuding autoprefixer - converts all scss documents to css
gulp.task(
  'sass', function(done) {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(rename('style.readable.css'))
      .pipe(gulp.dest('./css'));
      done();
  }
);

// CSS TASK - minifies the readable css and adds a sourcemap
gulp.task(
  'css', function(done) {
    return gulp.src('./css/style.readable.css')
      .pipe(cleanCSS())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./css'));
      done();
  }
);

// SOURCEMAPS TASK
gulp.task(
  'maps', function(done) {
    return gulp.src('./css/style.min.css')
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write('./maps'));
      done();
  }
);

// CSS TASK - minifies the readable css
// gulp.task(
//   'css', function(done) {
//     gulp.src('./css/style.readable.css')
//       .pipe(uglifycss({
//         "uglyComments": true
//       }))
//       .pipe(rename('style.min.css'))
//       .pipe(gulp.dest('./css'));
//       done();
//   }
// );

// RUN TASK
gulp.task('run', gulp.series('sass', 'css', 'maps'));

// WATCH TASK
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', gulp.series('sass','css'));
});

// DEFAULT TASK - runs both the run task (sass and css) and the watch task
gulp.task('default', gulp.series('run', 'watch'));

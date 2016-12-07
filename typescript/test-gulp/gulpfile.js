var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
  return gulp.src('./ts/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: './output.js'
    }))
    .pipe(gulp.dest('./js'));
});
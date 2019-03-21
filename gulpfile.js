/* Gulp and plugins */
var gulp = require('gulp');
// var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var shell = require('gulp-shell');

/* External libraries to be bundled */
var bootstrapMinJs = './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
var jqueryMinJs = './node_modules/jquery/dist/jquery.min.js';
var jqueryUiMinJs = './assets/js/jquery-ui.min.js';
var touchswipeMinJs = './node_modules/jquery-touchswipe/jquery.touchSwipe.min.js';
var slickMinJs = './node_modules/slick-carousel/slick/slick.min.js';

var extLibs = [jqueryMinJs, bootstrapMinJs, touchswipeMinJs, slickMinJs];


/* Gulp tasks */
gulp.task('sass', shell.task('sass --watch assets/sass:assets/css'));
gulp.task('jekyll', shell.task('jekyll serve --watch'));
gulp.task('atom', shell.task('atom .'));

gulp.task('start', gulp.parallel('sass', 'jekyll', 'atom'));

gulp.task('get-ext-js', function() {
  return gulp.src(extLibs)
    .pipe(concat('ext.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./assets/js'));
});

/* Gulp and plugins */
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var imagemin = require('gulp-imagemin');
var shell = require('gulp-shell');
//var sourcemaps = require('gulp-sourcemaps');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');

/* External libraries to be bundled */
var bootstrapMinJs = './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
var jqueryMinJs = './node_modules/jquery/dist/jquery.min.js';
var touchswipeMinJs = './node_modules/jquery-touchswipe/jquery.touchSwipe.min.js';
var slickMinJs = './node_modules/slick-carousel/slick/slick.min.js';
var jqueryUiMinJs = './assets/js/jquery-ui.min.js';

var extLibs = [jqueryMinJs, bootstrapMinJs, touchswipeMinJs, slickMinJs];


/* Gulp tasks */
// Startup task
gulp.task('sass', shell.task('sass --watch assets/sass:assets/css'));
gulp.task('jekyll', shell.task('jekyll serve --watch'));
gulp.task('atom', shell.task('atom .'));
gulp.task('start', gulp.parallel('sass', 'jekyll', 'atom'));

// Concatenate and minify external js
gulp.task('get-ext-js', function() {
  return gulp.src(extLibs)
    .pipe(concat('ext.js'))
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      }
    }))
    .pipe(gulp.dest('./assets/js'));
});

// Minify my own files and images
gulp.task('minify-js', function() {
  return gulp.src('assets/js/*.js')
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
      ignoreFiles: ['*.min.js']
    }))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('minify-images', function() {
  return gulp.src('assets/img_raw/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img'));
});

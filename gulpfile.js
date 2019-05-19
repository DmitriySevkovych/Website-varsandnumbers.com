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
var jquery = './node_modules/jquery/dist/jquery.min.js';
var bootstrap = './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
var touchswipe = './node_modules/jquery-touchswipe/jquery.touchSwipe.min.js';
var slick = './node_modules/slick-carousel/slick/slick.min.js';
// var jqueryUi = './assets/js/jquery-ui.min.js';
var vivus = './node_modules/vivus/dist/vivus.min.js';

var extLibs = [jquery, bootstrap, touchswipe, slick, vivus];


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

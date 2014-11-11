//Settings
var siteUrl = 'example.com';


// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    browserSync = require('browser-sync'),
    raster = require('gulp-raster'),
    rename = require('gulp-rename'),
    reload = browserSync.reload;
    
    
// Browser sync
gulp.task('browser-sync', function() {
    browserSync.init(['css/*.css', 'js/*.js', 'images/*'], {
        proxy: siteUrl,
        injectChanges: true
    });
});


// Styles
gulp.task('styles', function() {
  return gulp.src('src/css/style.scss')
    .pipe(sass({ style: 'expanded', }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('css'))
    /*.pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))*/
    .pipe(reload({ stream:true/*, once: true*/ }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('js'));
});

//SVG
gulp.task('svg', function() {
  return gulp.src('src/images/**/*.svg')
    .pipe(raster())
    .pipe(rename({extname: '.png'}))
    //.pipe(cache(imagemin({ optimizationLevel: 4, progressive: true, interlaced: true })))
    .pipe(gulp.dest('images'));
});

// Images
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 4, progressive: true, interlaced: true })))
    .pipe(gulp.dest('images'));
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['css', 'scripts', 'images'], {read: false})
    .pipe(clean());
});

// Default task tbe run with 'gulp' on command line.
gulp.task('default', ['clean', 'browser-sync'], function() {
  gulp.start('styles', 'scripts', 'images', 'svg');

  // Watch .scss files
  gulp.watch('src/css/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);
  
  // Watch svg files
  gulp.watch('src/images/**/*.svg', ['svg']);

});

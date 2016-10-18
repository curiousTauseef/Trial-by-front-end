var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');

var src = {
  html: "./index.html",
  sass: "./sass/*.scss",
  css: "./css/*.css",
  cssDest: "./css/"
}

gulp.task('styles', function() {
    gulp.src(src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(src.cssDest))
});


gulp.task('serve', ['sass', 'minify-css'], function() {
    browserSync.init({
        proxy: "http://localhost:8000/"
    });

    gulp.watch(src.sass, ['sass']);
    gulp.watch(src.html).on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(src.sass)
        .pipe(sass())
        .pipe(gulp.dest(src.cssDest))
        .pipe(browserSync.stream());
});

gulp.task('minify-css', function() {
  return gulp.src(src.css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('min'));
});

gulp.task('default', ['serve']);
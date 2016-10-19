var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

var src = {
  html: "./index.html",
  sass: "./sass/*.scss",
  css: "./css/*.css",
  cssDest: "./css/",
  cssMin: "./min/*.css"
}

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        proxy: "http://localhost:8000/"
    });

    gulp.watch(src.sass, ['sass']);
    gulp.watch(src.css, ['minify-css']);
    gulp.watch(src.html).on('change', browserSync.reload);
    gulp.watch(src.cssMin).on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(src.sass)
        .pipe(sass())
        .pipe(gulp.dest(src.cssDest))
        .pipe(browserSync.stream());
});

gulp.task('minify-css', function() {
  return gulp.src(src.css)
    .pipe(autoprefixer({
              browsers: ['last 2 versions'],
              cascade: false
          }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('min'));
});

gulp.task('default', ['serve', 'minify-css']);
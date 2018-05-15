var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

var paths = {
    sass: ['./scss/*.scss']
};

gulp.task('watch', function() {
    watch('./scss/*.scss', function() { ProcessarEstilos(); });
});

function ProcessarEstilos(){
    gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./dist/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./dist/css/'));
}
const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    csso = require('gulp-csso'),
    include = require('gulp-file-include'),
    htmlmin = require('gulp-htmlmin'),
    del = require('del'),
    concat = require('gulp-concat'),
    sync = require('browser-sync')

gulp.task('scss', function(done) {
    gulp.src('src/scss/**.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(concat('index.css'))
        .pipe(gulp.dest('dist'));
    done()
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./sass/**/*.scss', ['sass']);
});

exports.scss = 'scss'
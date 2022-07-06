const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    del = require('del'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify-es').default,
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    newer = require('gulp-newer'),
    browserSync = require('browser-sync').create();

// пути
const paths = {
    html: {
        src: 'src/*.html',
        dest: 'dist/'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'src/img/**',
        dest: 'dist/img'
    }
}

// задача для очистки
function clean() {
    return del(['dist/*', '!dist/img']);
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true}))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
}

// задача для обработки стилей
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        // .pipe(rename({
        //     basename: 'main',
        //     suffix: '.min'
        // }))
        .pipe(concat('main.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// задача для обработки скриптов
function scripts() {
   return gulp.src(paths.scripts.src)
       .pipe(sourcemaps.init())
       .pipe(babel({
           presets: ['@babel/env']
       }))
       .pipe(uglify())
       .pipe(concat('main.min.js'))
       .pipe(sourcemaps.write('.'))
       .pipe(gulp.dest(paths.scripts.dest))
       .pipe(browserSync.stream());
}

function img() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(paths.images.dest));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch(paths.html.src).on('change', browserSync.reload);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
}

const build = gulp.series(clean, html, gulp.parallel(styles, scripts, img), watch);

exports.clean = clean;
exports.img = img;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.default = build;
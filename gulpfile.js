const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const newer = require('gulp-newer');
const browserSync = require('browser-sync').create();
const ghPages = require('gulp-gh-pages');

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
    },
    fonts: {
        src: 'src/fonts/**',
        dest: 'dist/fonts'
    }
}

function deploy() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
}

function clean() {
    return del(['dist/*', '!dist/img']);
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true}))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
}

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
        .pipe(concat('main.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

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

function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(newer(paths.fonts.dest))
        .pipe(gulp.dest(paths.fonts.dest))
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

const build = gulp.series(clean, html, gulp.parallel(styles, scripts, img, fonts), watch);

exports.clean = clean;
exports.fonts = fonts;
exports.img = img;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.deploy = deploy;
exports.build = build;
exports.default = build;
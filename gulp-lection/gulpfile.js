const { watch, series, parallel, src, dest } = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

const paths = {
    dist: './dist',
    src: './src',
};

function cleanDist() {
    return src('dist/*', { read: false }).pipe(clean());
}

function copyHtml() {
    return src('./public/index.html').pipe(dest('./dist'));
}

function copyCss() {
    return src([
        '../common/css/normalize.css',
        '../common/css/skeleton.css',
        '../common/css/dark-theme.css',
        'src/**/*.css',
    ])
        .pipe(concat('app.css'))
        .pipe(dest(paths.dist + '/css'));
}

function copyJS() {
    return src('src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js'));
}

function copyVendorJS() {
    return src(['./node_modules/jquery/dist/jquery.min.js'])
        .pipe(concat('vendors.js'))
        .pipe(dest('./dist/js'));
}

const build = parallel(copyHtml, copyCss, copyJS, copyVendorJS);

function serve() {
    series(cleanDist, build);

    browserSync.init({
        server: {
            baseDir: './dist',
        },
    });

    watch('src/*.css', copyCss).on('change', browserSync.reload);
    watch('src/**/*.js', copyJS).on('change', browserSync.reload);
}

module.exports = {
    build: series(cleanDist, build),
    serve: serve,
};

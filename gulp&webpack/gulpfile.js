var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    webpack = require('webpack'),
    util = require('gulp-util');

var webpackConfig = require('./webpack.config');

var config = {   // 路径配置
    lessWatch: './public/dev/default/style/*.less',
    lessFrom: './public/dev/default/style/style.less',
    lessTo: './public/dist/default/style',
    jsFrom: './public/dev/default/javascript/*.js',
    jsTo: './public/dist/default/javascript'
};

gulp.task('js', () => {
    gulp.src(config.jsFrom)
        .pipe(plumber({ errorHandler: notify.onError('Error:<%= error.message %>') }))
        .pipe(concat('default.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(config.jsTo));
});

gulp.task('less', () => {
    gulp.src(config.lessFrom)
        .pipe(plumber({ errorHandler: notify.onError('Error:<%= error.message %>') }))
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest(config.lessTo));
});

gulp.task('webpack', callback => {
    webpack(webpackConfig, (err, status) => {
        if (err) throw new util.PluginError("webpack", err);

        // util.log("[webpack]", status.toString({

        // }));
        callback();
    })
});

gulp.task('default', ['less', 'js']);

gulp.task('watch', () => {
    gulp.watch(config.lessWatch, ['less']);
});
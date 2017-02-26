'use strict';

global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        app: require('./gulp/paths/app.js')
    },
    del: require('del'),
    fs: require('fs'),
    merge: require('merge-stream'),
    browserSync: require('browser-sync').create(),
    pugIncludeGlob: require('pug-include-glob'),
    //common
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('light', $.gulp.series(
    $.gulp.parallel(
        'sass',
        'pug'
    ),
    'inject-favicon-markups'
));

$.gulp.task('build', $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'sprite:svg',
    'sprite:png',
    'copy:image',
    'copy:font',
    'css:foundation'
));

$.gulp.task('default', $.gulp.series(
    'check-for-favicon-update',
    'clean',
    'build',
    'generate-favicon',
    'inject-favicon-markups',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
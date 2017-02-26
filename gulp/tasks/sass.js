'use strict';

module.exports = function () {

    $.gulp.task('sass', function () {

        var notifyGeneric = {
            title: function () {
                return '<%= file.relative %> - ' + this.s.prettySize;
            },
            onLast: true,
            subtitle: "Successfully Compiled",
            message: "time: <%= options.hour %>:<%= options.minute %>:<%= options.second %>",
            templateOptions: {
                hour: lz(new Date().getHours()),
                minute: lz(new Date().getMinutes()),
                second: lz(new Date().getSeconds()),
            },
            s: $.gp.size()
        };

        return $.gulp.src('./source/style/main.scss')
            .pipe($.gp.sassGlob())
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass()).on('error', $.gp.notify.onError({title: 'Style'}))
            .pipe($.gp.autoprefixer({browsers: $.config.autoprefixerConfig}))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.cssUnit({
                type: 'px-to-rem',
                rootSize: 16
            }))
            .pipe($.gulp.dest($.config.root + '/assets/css'))
            .pipe(notifyGeneric.s)
            .pipe($.gp.notify(notifyGeneric))
            .pipe($.browserSync.stream())
    });

    function lz(val) {
        return ('0' + val).slice(-2);
    }
};

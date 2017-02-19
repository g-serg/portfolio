'use strict';

module.exports = function () {

    $.gulp.task('pug', function () {

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

        return $.gulp.src('./source/template/pages/*.pug')
            .pipe($.gp.pug({
                plugins: [$.pugIncludeGlob({/* options */})],
                pretty: true,
                locals : {
                    init: JSON.parse($.fs.readFileSync('./source/initial.json', 'utf8')),
                }
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Pug',
                    message: error.message
                }
            }))
            .pipe($.gulp.dest($.config.root))
            .pipe(notifyGeneric.s)
            .pipe($.gp.notify(notifyGeneric))
    });

    function lz(val) {
        return ('0' + val).slice(-2);
    }
};

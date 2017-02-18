'use strict';

module.exports = function() {
  var from = $.config.src + '/fonts/**/*.*',
    to = $.config.root + '/assets/fonts',
    task = 'copy:font';

  $.gulp.task(task, function() {
    return $.gulp.src(from, {
        since: $.gulp.lastRun(task)
      })
      .pipe($.gulp.dest(to));
  });
};
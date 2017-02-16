'use strict';

module.exports = function() {
  var from = $.config.src + '/images/**/*.*',
    to = $.config.root + '/assets/images',
    task = 'copy:image';

  $.gulp.task(task, function() {
    return $.gulp.src(from, {
        since: $.gulp.lastRun(task)
      })
      .pipe($.gulp.dest(to));
  });
};
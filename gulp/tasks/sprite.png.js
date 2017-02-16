'use strict';

module.exports = function() {
  var from = $.config.src + '/icons/*.png',
    to = $.config.src + '/images',
    cssTo = $.config.src + '/style/common',
    task = 'sprite:png',
    mithCfg = {
      imgName: 'sprite.png', // итоговый спрайт
      cssName: 'sprite.scss', // файл стилей
      algorithm: 'left-right',
      padding: 20
    };

  $.gulp.task(task, function() {
    var spriteData = $.gulp.src(from).pipe($.gp.spritesmith(mithCfg));

    // путь куда записываем спрайт
    var imgStream = spriteData.img.pipe($.gulp.dest(to));

    // путь куда записываем файл стилей для спрайта
    var cssStream = spriteData.css.pipe($.gulp.dest(cssTo));

    return $.merge(imgStream, cssStream);
  });
};
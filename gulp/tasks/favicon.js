
'use strict';

module.exports = function() {

    var FAVICON_DATA_FILE = 'faviconData.json';

    $.gulp.task('generate-favicon', function(done) {
        $.gp.realFavicon.generateFavicon({
            masterPicture: './source/images/hero.jpg',
            dest: $.config.root, //'./build',
            //.pipe($.gulp.dest($.config.root))
            iconsPath: '/',
            design: {
                ios: {
                    pictureAspect: 'noChange',
                    assets: {
                        ios6AndPriorIcons: false,
                        ios7AndLaterIcons: false,
                        precomposedIcons: false,
                        declareOnlyDefaultIcon: true
                    }
                },
                desktopBrowser: {},
                windows: {
                    pictureAspect: 'noChange',
                    backgroundColor: '#da532c',
                    onConflict: 'override',
                    assets: {
                        windows80Ie10Tile: false,
                        windows10Ie11EdgeTiles: {
                            small: false,
                            medium: true,
                            big: false,
                            rectangle: false
                        }
                    }
                },
                androidChrome: {
                    pictureAspect: 'noChange',
                    themeColor: '#ffffff',
                    manifest: {
                        display: 'standalone',
                        orientation: 'notSet',
                        onConflict: 'override',
                        declared: true
                    },
                    assets: {
                        legacyIcon: false,
                        lowResolutionIcons: false
                    }
                },
                safariPinnedTab: {
                    pictureAspect: 'blackAndWhite',
                    threshold: 75,
                    themeColor: '#5bbad5'
                }
            },
            settings: {
                scalingAlgorithm: 'Mitchell',
                errorOnImageTooSmall: false
            },
            markupFile: FAVICON_DATA_FILE
        }, function() {
            done();
        });
    });

    $.gulp.task('inject-favicon-markups', function() {
        return $.gulp.src([ $.config.root + '/*.html' ])
            .pipe($.gp.realFavicon.injectFaviconMarkups(JSON.parse($.fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
            .pipe($.gulp.dest($.config.root));
    });

    $.gulp.task('check-for-favicon-update', function(done) {
        var currentVersion = JSON.parse($.fs.readFileSync(FAVICON_DATA_FILE)).version;
        $.gp.realFavicon.checkForUpdates(currentVersion, function(err) {
            if (err) {
                throw err;
            }
        });
        done();
    });
}

// flip

var flip = (function() {
    var init = function() {
        _setupListners();
    };

    var _setupListners = function () {
        //прослушка событий
        $('.login__link').on('click', function(e){
            e.preventDefault();

            $('#flip-toggle').toggleClass('hover');
            $('.login__button').hide();
        });
        $(document).mouseup(function (e) {
            var flipContainer = $("#flip-toggle");
            if (flipContainer.has(e.target).length === 0) {
                flipContainer.removeClass('hover');
                $('.login__button').show();
            }
        });
    };

    return {
        init: init
    };
})();

flip.init();
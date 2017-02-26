
var navigation = (function () {

    var init = function () {
        _setupListners();
    };

    var _setupListners = function () {
        //прослушка событий
        $('.sidebar-blog__link[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
                $target = $(target),
                navItem = $(this).closest('.sidebar-blog__item');

            navItem.addClass('sidebar-blog__active-link');
            navItem.siblings().removeClass('sidebar-blog__active-link');

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

        $(window).on('scroll', function() {
            var sidebar = $('.blog__sidebar');
            var height = $(window).scrollTop();
            var top = $('.blog__left').offset().top;


            sidebar.addClass('blog__sidebar-fixed');

            if(top > height) {
                sidebar.removeClass('blog__sidebar-fixed');
            }
            sidebarNav();
        });

        var sidebarNav = function () {
            var items = $('.sidebar-blog__item'),
                height = $(window).scrollTop(),
                current = -1,
                titles = [];

           $('.articles__title').each(function(index, title) {
                titles.push($(title).offset().top);

           });


            for (var i = 0; i < titles.length; i++) {
                var titleTop = titles[i] - 230;// 230-подгоняем под размеры статей(ничего более адекватного не придумал

                if (height > titleTop && current !== i) {
                    items.removeClass('sidebar-blog__active-link');
                    items.eq(i).addClass('sidebar-blog__active-link');
                    current = i;
                }
            }

        };

        // анвигация по клику
        $('.blog__btn-link').on('click', function(e){
            e.preventDefault();
            var container = $(".blog__left");
            var width = container.innerWidth();

            if(container.hasClass('blog_active')) {
                container.removeClass('blog_active')
                    .css({
                        'left': 0
                    })
            } else {
                container.removeClass('blog_active')
                    .css({
                        'left': - width + 'px'
                    });
                container.addClass('blog_active');
            }
        });
    };

    return {
        init: init
    };
})();

// проверка запуска :-)
var blog = $('.blog__left');
if(blog.length > 0) {
    navigation.init();
}



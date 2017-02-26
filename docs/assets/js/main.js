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
$(document).ready(function () {


});

var hideMenu = (function(){
    $('.menu-button').on('click', function(){
        $('.menu-nav').toggleClass('menu-nav__toggle');
        $('.menu-button').toggleClass('menu-button__active');
    });
}());



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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaXAuanMiLCJtYWluLmpzIiwibWVudS5qcyIsIm5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmxpcFxuXG52YXIgZmxpcCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBfc2V0dXBMaXN0bmVycygpO1xuICAgIH07XG5cbiAgICB2YXIgX3NldHVwTGlzdG5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8v0L/RgNC+0YHQu9GD0YjQutCwINGB0L7QsdGL0YLQuNC5XG4gICAgICAgICQoJy5sb2dpbl9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKCcjZmxpcC10b2dnbGUnKS50b2dnbGVDbGFzcygnaG92ZXInKTtcbiAgICAgICAgICAgICQoJy5sb2dpbl9fYnV0dG9uJykuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGZsaXBDb250YWluZXIgPSAkKFwiI2ZsaXAtdG9nZ2xlXCIpO1xuICAgICAgICAgICAgaWYgKGZsaXBDb250YWluZXIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBmbGlwQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdob3ZlcicpO1xuICAgICAgICAgICAgICAgICQoJy5sb2dpbl9fYnV0dG9uJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH07XG59KSgpO1xuXG5mbGlwLmluaXQoKTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cblxufSk7IiwiXG52YXIgaGlkZU1lbnUgPSAoZnVuY3Rpb24oKXtcbiAgICAkKCcubWVudS1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAkKCcubWVudS1uYXYnKS50b2dnbGVDbGFzcygnbWVudS1uYXZfX3RvZ2dsZScpO1xuICAgICAgICAkKCcubWVudS1idXR0b24nKS50b2dnbGVDbGFzcygnbWVudS1idXR0b25fX2FjdGl2ZScpO1xuICAgIH0pO1xufSgpKTtcblxuIiwiXG52YXIgbmF2aWdhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3NldHVwTGlzdG5lcnMoKTtcbiAgICB9O1xuXG4gICAgdmFyIF9zZXR1cExpc3RuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL9C/0YDQvtGB0LvRg9GI0LrQsCDRgdC+0LHRi9GC0LjQuVxuICAgICAgICAkKCcuc2lkZWJhci1ibG9nX19saW5rW2hyZWZePVwiI1wiXScpLm9uKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuaGFzaCxcbiAgICAgICAgICAgICAgICAkdGFyZ2V0ID0gJCh0YXJnZXQpLFxuICAgICAgICAgICAgICAgIG5hdkl0ZW0gPSAkKHRoaXMpLmNsb3Nlc3QoJy5zaWRlYmFyLWJsb2dfX2l0ZW0nKTtcblxuICAgICAgICAgICAgbmF2SXRlbS5hZGRDbGFzcygnc2lkZWJhci1ibG9nX19hY3RpdmUtbGluaycpO1xuICAgICAgICAgICAgbmF2SXRlbS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWJsb2dfX2FjdGl2ZS1saW5rJyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgJ3Njcm9sbFRvcCc6ICR0YXJnZXQub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICB9LCA5MDAsICdzd2luZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRhcmdldDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNpZGViYXIgPSAkKCcuYmxvZ19fc2lkZWJhcicpO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIHZhciB0b3AgPSAkKCcuYmxvZ19fbGVmdCcpLm9mZnNldCgpLnRvcDtcblxuXG4gICAgICAgICAgICBzaWRlYmFyLmFkZENsYXNzKCdibG9nX19zaWRlYmFyLWZpeGVkJyk7XG5cbiAgICAgICAgICAgIGlmKHRvcCA+IGhlaWdodCkge1xuICAgICAgICAgICAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2Jsb2dfX3NpZGViYXItZml4ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpZGViYXJOYXYoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNpZGViYXJOYXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSAkKCcuc2lkZWJhci1ibG9nX19pdGVtJyksXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAtMSxcbiAgICAgICAgICAgICAgICB0aXRsZXMgPSBbXTtcblxuICAgICAgICAgICAkKCcuYXJ0aWNsZXNfX3RpdGxlJykuZWFjaChmdW5jdGlvbihpbmRleCwgdGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0aXRsZXMucHVzaCgkKHRpdGxlKS5vZmZzZXQoKS50b3ApO1xuXG4gICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlVG9wID0gdGl0bGVzW2ldIC0gMjMwOy8vIDIzMC3Qv9C+0LTQs9C+0L3Rj9C10Lwg0L/QvtC0INGA0LDQt9C80LXRgNGLINGB0YLQsNGC0LXQuSjQvdC40YfQtdCz0L4g0LHQvtC70LXQtSDQsNC00LXQutCy0LDRgtC90L7Qs9C+INC90LUg0L/RgNC40LTRg9C80LDQu1xuXG4gICAgICAgICAgICAgICAgaWYgKGhlaWdodCA+IHRpdGxlVG9wICYmIGN1cnJlbnQgIT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucmVtb3ZlQ2xhc3MoJ3NpZGViYXItYmxvZ19fYWN0aXZlLWxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZXEoaSkuYWRkQ2xhc3MoJ3NpZGViYXItYmxvZ19fYWN0aXZlLWxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0LDQvdCy0LjQs9Cw0YbQuNGPINC/0L4g0LrQu9C40LrRg1xuICAgICAgICAkKCcuYmxvZ19fYnRuLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSAkKFwiLmJsb2dfX2xlZnRcIik7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBjb250YWluZXIuaW5uZXJXaWR0aCgpO1xuXG4gICAgICAgICAgICBpZihjb250YWluZXIuaGFzQ2xhc3MoJ2Jsb2dfYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2Jsb2dfYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IDBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNsYXNzKCdibG9nX2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiAtIHdpZHRoICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoJ2Jsb2dfYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0XG4gICAgfTtcbn0pKCk7XG5cbi8vINC/0YDQvtCy0LXRgNC60LAg0LfQsNC/0YPRgdC60LAgOi0pXG52YXIgYmxvZyA9ICQoJy5ibG9nX19sZWZ0Jyk7XG5pZihibG9nLmxlbmd0aCA+IDApIHtcbiAgICBuYXZpZ2F0aW9uLmluaXQoKTtcbn1cblxuXG4iXX0=

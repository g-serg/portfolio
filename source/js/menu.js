
var hideMenu = (function(){
    $('.menu-button').on('click', function(){
        $('.menu-nav').toggleClass('menu-nav__toggle');
        $('.menu-button').toggleClass('menu-button__active');
    });
}());


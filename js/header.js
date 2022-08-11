$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
            $('.nav__item').addClass("active__text")
            $('.phone__number').addClass("active__text")
        } else {
            $(".header").removeClass("active");
            $('.nav__item').removeClass("active__text")
            $('.phone__number').removeClass("active__text")
        }
    });
});
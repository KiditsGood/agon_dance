$('.schedule__choose-address').click(function () {
    $(this).addClass('schedule__choose-active').siblings().removeClass('schedule__choose-active')
})

$('.schedule__choose-address:last-child').click(() => {
    if ($(window).width() > 1023) {
        $('.schedule__time, .schedule__day').css({
            display: 'none'
        })
        $('.olimp').css({
            display: 'flex'
        })
    }
    else {
        $('.mobile--olimp').css({
            display: 'flex'
        })
        $('.energy').css({
            display: 'none'
        })
    }
})

$('.schedule__choose-address:first-child').click(() => {
    if ($(window).width() > 1023) {
        $('.olimp').css({
            display: 'none'
        })
        $('.schedule__time:not(.olimp), .schedule__day:not(.olimp)').css({
            display: 'flex'
        })
    }
    else {
        $('.mobile--olimp').css({
            display: 'none'
        })
        $('.energy').css({
            display: 'flex'
        })
    }
})
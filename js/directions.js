$('.directions__european').mouseenter(function () {
    $('.directions__european-text').addClass('directions__move')
    $('.european__list').css({
        display: 'block'
    })

    $(this).mouseleave(function () {
        $('.directions__european-text').removeClass('directions__move')
        $('.european__list').css({
            display: 'none'
        })
    })
})

$('.directions__latin').mouseenter(function () {
    $('.directions__latin-text').addClass('directions__move')
    $('.latin__list').css({
        display: 'block'
    })

    $(this).mouseleave(function () {
        $('.directions__latin-text').removeClass('directions__move')
        $('.latin__list').css({
            display: 'none'
        })
    })
})

$('.directions__bot').mouseenter(function () {
    $('.directions__child').addClass('directions__left')
    $('.child__list').css({
        display: 'block'
    })

    $(this).mouseleave(function () {
        $('.directions__child').removeClass('directions__left')
        $('.child__list').css({
            display: 'none'
        })
    })
})
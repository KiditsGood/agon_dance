$('.directions__european').mouseenter(function () {
    if ($(window).width() < 1024) {
        $('.directions__european-text').css({
            display: 'none'
        })

        $('.european__list').css({
            display: 'flex'
        })
    }
    else {
        $('.european__list').css({
            display: 'block'
        })
    }

    $('.directions__european-text').addClass('directions__move')

    $(this).mouseleave(function () {
        $('.directions__european-text').removeClass('directions__move')
        $('.european__list').css({
            display: 'none'
        })
        if ($(window).width() < 1024) {
            $('.directions__european-text').css({
                display: 'block'
            })
        }
    })
})

$('.directions__latin').mouseenter(function () {
    if ($(window).width() < 1024) {
        $('.directions__latin-text').css({
            display: 'none'
        })

        $('.latin__list').css({
            display: 'flex'
        })
    }
    else {
        $('.latin__list').css({
            display: 'block'
        })
    }

    $('.directions__latin-text').addClass('directions__move')

    $(this).mouseleave(function () {
        $('.directions__latin-text').removeClass('directions__move')
        $('.latin__list').css({
            display: 'none'
        })

        if ($(window).width() < 1024) {
            $('.directions__latin-text').css({
                display: 'block'
            })
        }
    })
})

$('.directions__bot').mouseenter(function () {
    if ($(window).width() < 1024) {
        $('.directions__child').css({
            display: 'none'
        })

        $('.child__list').css({
            display: 'flex'
        })
    }
    else {
        $('.child__list').css({
            display: 'block'
        })
    }

    $('.directions__child').addClass('directions__left')

    $(this).mouseleave(function () {
        $('.directions__child').removeClass('directions__left')
        $('.child__list').css({
            display: 'none'
        })

        if ($(window).width() < 1024) {
            $('.directions__child').css({
                display: 'block'
            })
        }
    })
})
$('.list__item-tops').click(function () {
    $(this).next().slideToggle('slow')
    console.log($(this.lastElementChild))


    if ($(this.lastElementChild).attr('src') == 'img/plus.svg') {
        $(this.lastElementChild).attr('src', 'img/minus.svg')
    }
    else {
        $(this.lastElementChild).attr('src', 'img/plus.svg')
    }
})

$('.nav__history').click(function () {
    $('.history__open').slideToggle('slow')
})

$('.burger').click(function () {
    $(this).toggleClass('open')

    $('.mobile').slideToggle('slow')

    if ($('body').attr('style')) {
        $('body').removeAttr('style')

        $('#overlay').remove()
    }
    else {
        $('body').css({
            overflow: 'hidden'
        })
        $('body').append('<div id="overlay">')
    }
})

$('.nav__item').click(function () {
    if ($(window).width() < 1024) {
        $('.mobile').slideToggle('slow')
        $('.burger').toggleClass('open')

        if ($('body').attr('style')) {
            $('body').removeAttr('style')

            $('#overlay').remove()
        }
        else {
            $('body').css({
                overflow: 'hidden'
            })
            $('body').append('<div id="overlay">')
        }
    }
})
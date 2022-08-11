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
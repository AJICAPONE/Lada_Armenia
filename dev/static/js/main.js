$(document).ready(function () {
    $('.h-header__item').on('click', function () {
        let currentSelectEl = $(this).find('.h-header__depth1_submenu');
        currentSelectEl.slideToggle(200);
        $('.h-header__depth1_submenu').not(currentSelectEl).slideUp(200);
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".h-header__item,.h-header__depth1_submenu").length) {
            $('.h-header__depth1_submenu').slideUp(200);
        }
        e.stopPropagation();
    });

    $('.m-mobile__menu_item').on('click', function () {
        let currentSelectEl = $(this).find('.m-menu__depth1_submenu');
        currentSelectEl.slideToggle(200);
        $('.m-menu__depth1_submenu').not(currentSelectEl).slideUp(200);
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".m-mobile__menu_item,.m-menu__depth1_submenu").length) {
            $('.m-menu__depth1_submenu').slideUp(200);
        }
        e.stopPropagation();
    });

    $('.s-services__item').on('mouseenter', function () {
        $(this).addClass('active');
        let currentSelectEl = $(this).find('.s-services__steps_container');
        currentSelectEl.slideDown(200);

    });

    $('.s-services__item').on('mouseleave', function () {
        $(this).removeClass('active');
        let currentSelectEl = $(this).find('.s-services__steps_container');
        currentSelectEl.slideUp(200);
    });

    $('.t-tour__select').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        let currentSelectEl = $(this).find('.t-tour__list_wrapper');
        currentSelectEl.slideToggle(200);
        $('.t-tour__list_wrapper').not(currentSelectEl).slideUp(200);
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".t-tour__select,.t-tour__list_wrapper").length) {
            $('.t-tour__select').removeClass('active');
            $('.t-tour__list_wrapper').slideUp(200);
        }
        e.stopPropagation();
    });

    $('.t-tour__item').on('click',function () {
       let this_text = $(this).text();
       $(this).parents('.t-tour__select').find('span').text(this_text);
       $('.t-tour__select').removeClass('active');
    });


    $('[data-toggle="datepicker"]').datepicker({
        autoShow: false,
        language: 'ru-RU',
        pickedClass: 'picked-day-migdex',
        highlightedClass: 'today-day-migdex',
        onSelect: function(date) {
            // Получаем выбранную дату и помещаем ее в элемент с id="selected-date"
            $('.t-tour__data').text(date);
        }
    });

    $('.open-mobile-menu').on('click',function () {
       $(this).next('.m-mobile__menu').addClass('active');
    });

    $('.close-mobile-menu').on('click',function () {
        $('.m-mobile__menu').removeClass('active');
    });




});
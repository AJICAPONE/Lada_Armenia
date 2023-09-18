$(document).ready(function () {
    $('.filter-category-list-name').click(function () {
        $(this).next('ul').slideToggle(200);
    });



    $('.filter-category-item-lvl2').click(function () {
        $(this).addClass('active');
        if($('.filter-category-remove').click(function () {
            $(this).parent().removeClass('active');
            return false;
        }));
    });

    // Фильтр цена
    $(function () {
        $('#filter-slider').slider({
            animate: true,
            range: true,
            min: 300,
            max: 1000000,
            values: [ 300, 1000000 ],
            slide: function(event, ui) {

                $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]);
                $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);
                $('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>' + ui.values[ 1 ] );
                // $('#filter-dot-slide1').val(ui.values[0]);
                // $('#filter-dot-slide2').val(ui.values[1]);
                $('#hidden1').val(ui.values[0]);
                $('#hidden2').val(ui.values[1]);


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#filter-slider").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#filter-slider").slider( "option", "min" );
        var max = $("#filter-slider").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#price-reset').click(function () {
            $('#hidden1').val('');
            $('#hidden2').val('');
        });
    });



    // Фильтр прощадь свечения
    $(function () {
        $('#filter-slider2').slider({
            animate: true,
            range: true,
            min: 4,
            max: 200,
            values: [ 4, 200 ],
            slide: function(event, ui) {

                $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]);
                $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);
                $('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>' + ui.values[ 1 ] );
                // $('#filter-dot-slide1').val(ui.values[0]);
                // $('#filter-dot-slide2').val(ui.values[1]);
                $('#light1').val(ui.values[0] + ' м²');
                $('#light2').val(ui.values[1] + ' м²');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#filter-slider2").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#filter-slider2").slider( "option", "min" );
        var max = $("#filter-slider2").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#light-reset').click(function () {
            $('#light1').val('');
            $('#light2').val('');
        });
    });



    // Фильтр Количество ламп
    $(function () {
        $('#filter-slider3').slider({
            animate: true,
            range: true,
            min: 0,
            max: 550,
            values: [ 0, 550 ],
            slide: function(event, ui) {

                $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]);
                $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);
                $('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>' + ui.values[ 1 ] );
                // $('#filter-dot-slide1').val(ui.values[0]);
                // $('#filter-dot-slide2').val(ui.values[1]);
                $('#count-light1').val(ui.values[0] + ' Шт');
                $('#count-light2').val(ui.values[1] + ' Шт');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#filter-slider3").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#filter-slider3").slider( "option", "min" );
        var max = $("#filter-slider3").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#count-reset').click(function () {
            $('#count-light1').val('');
            $('#count-light2').val('');
        });
    });

    // Фильтр Количество плафонов
    $(function () {
        $('#filter-slider4').slider({
            animate: true,
            range: true,
            min: 0,
            max: 84,
            values: [ 0, 84 ],
            slide: function(event, ui) {

                $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]);
                $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);
                $('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>' + ui.values[ 1 ] );
                // $('#filter-dot-slide1').val(ui.values[0]);
                // $('#filter-dot-slide2').val(ui.values[1]);
                $('#count-plafon1').val(ui.values[0] + ' Шт');
                $('#count-plafon2').val(ui.values[1] + ' Шт');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#filter-slider4").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#filter-slider4").slider( "option", "min" );
        var max = $("#filter-slider4").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#count-reset2').click(function () {
            $('#count-plafon1').val('');
            $('#count-plafon2').val('');
        });
    });



    // Фильтр Количество ламп
    $(function () {
        $('#filter-slider5').slider({
            animate: true,
            range: true,
            min: 0,
            max: 550,
            values: [ 0, 550 ],
            slide: function(event, ui) {

                $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]);
                $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);
                $('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>' + ui.values[ 1 ] );
                // $('#filter-dot-slide1').val(ui.values[0]);
                // $('#filter-dot-slide2').val(ui.values[1]);
                $('#count-power1').val(ui.values[0] + ' Вт');
                $('#count-power2').val(ui.values[1] + ' Вт');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#filter-slider5").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#filter-slider5").slider( "option", "min" );
        var max = $("#filter-slider5").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#count-reset3').click(function () {
            $('#count-power1').val('');
            $('#count-power2').val('');
        });
    });


    // Фильтр Высота
    $(function () {
        $('#filter-slider6').slider({
            animate: true,
            range: true,
            min: 40,
            max: 1880,
            values: [ 0, 1880 ],
            slide: function(event, ui) {

                $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]);
                $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);
                $('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>' + ui.values[ 1 ] );
                // $('#filter-dot-slide1').val(ui.values[0]);
                // $('#filter-dot-slide2').val(ui.values[1]);
                $('#count-height1').val(ui.values[0] + ' см');
                $('#count-height2').val(ui.values[1] + ' см');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#filter-slider6").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#filter-slider6").slider( "option", "min" );
        var max = $("#filter-slider6").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#count-reset4').click(function () {
            $('#count-height1').val('');
            $('#count-height2').val('');
        });
    });

    // Фильтр Высота
    $(function () {
        $('#filter-slider7').slider({
            animate: true,
            range: true,
            min: 0,
            max: 1200,
            values: [ 0, 1200 ],
            slide: function(event, ui) {

                $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]);
                $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);
                $('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>' + ui.values[ 1 ] );
                // $('#filter-dot-slide1').val(ui.values[0]);
                // $('#filter-dot-slide2').val(ui.values[1]);
                $('#count-longer1').val(ui.values[0] + ' см');
                $('#count-longer2').val(ui.values[1] + ' см');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#filter-slider7").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#filter-slider7").slider( "option", "min" );
        var max = $("#filter-slider7").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#count-reset5').click(function () {
            $('#count-longer1').val('');
            $('#count-longer2').val('');
        });
    });


    // Фильтр Ширина
    $(function () {
        $('#filter-slider8').slider({
            animate: true,
            range: true,
            min: 0,
            max: 1200,
            values: [ 0, 1200 ],
            slide: function(event, ui) {

                $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]);
                $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);
                $('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>' + ui.values[ 1 ] );
                // $('#filter-dot-slide1').val(ui.values[0]);
                // $('#filter-dot-slide2').val(ui.values[1]);
                $('#count-width1').val(ui.values[0] + ' см');
                $('#count-width2').val(ui.values[1] + ' см');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#filter-slider8").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#filter-slider8").slider( "option", "min" );
        var max = $("#filter-slider8").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#count-reset6').click(function () {
            $('#count-width1').val('');
            $('#count-width2').val('');
        });
    });








    // Пульт DU
    $('.filter-pult-du').on('click',function () {
        // $('.filter-price-checkbox-item').removeClass('checked');
        $(this).toggleClass('checked');
        var $du = $(this);
        $('.filter-pult-du-input').removeAttr('data-pult-du','checked');
        $du.parent().find('.filter-pult-du-input').attr('data-pult-du','checked');
    });


    $('.filter-price-checkbox-item').on('click',function () {
        // $('.filter-price-checkbox-item').removeClass('checked');
        $(this).toggleClass('checked');
        var $price = $(this);
        $('.filter-price-checkbox-item--input').removeAttr('data-filter-price','checked');
        $price.parent().find('.filter-price-checkbox-item--input').attr('data-filter-price','checked');
    });
    // Очищаем форму
    $('.filter-reset').click(function () {
        $("#reset-filter-form").trigger('reset');
        $('.filter-price-checkbox-item').removeClass('checked');
        $('.filter-category-item-lvl2').removeClass('active');
    });

    // Смотреть все
    $('.filter-category-watch-all').click(function () {
       $(this).prev().slideToggle(200);
        if (!$(this).data('filter-show')) {
            $(this).html('Свернуть');
            $(this).data('filter-show', true);
        }
        else {
            $(this).html('Смотреть все');
            $(this).data('filter-show', false);
        }

    });


    // Смотреть все
    $('.filter-more-parameters').click(function () {
        $('.filter-show-more-block').slideToggle(200);
        $('.filter-more-parameters .icon').toggleClass('rotate-filter');
        if (!$('.filter-more-parameters-text').data('filter-blocks-show')) {
            $('.filter-more-parameters-text').html('Свернуть');
            $('.filter-more-parameters-text').data('filter-blocks-show', true);
        }
        else {
            $('.filter-more-parameters-text').html('Дополнительные параметры');
            $('.filter-more-parameters-text').data('filter-blocks-show', false);
        }

    });
    $('.filter-more-parameters2').click(function () {
        $(this).next('.filter-show-more-block2').slideToggle(200);
        $('.icon',this).toggleClass('rotate-filter');
        if (!$(this).find('.filter-material-and-color-text').data('filter-blocks-show2')) {
            $(this).find('.filter-material-and-color-text').html('Свернуть');
            $(this).find('.filter-material-and-color-text').data('filter-blocks-show2', true);
        }
        else {
            $(this).find('.filter-material-and-color-text').html('Материал и цвет основания');
            $(this).find('.filter-material-and-color-text').data('filter-blocks-show2', false);
        }
    });

    $('.filter-more-parameters3').click(function () {
        $(this).next('.filter-show-more-block2').slideToggle(200);
        $('.icon',this).toggleClass('rotate-filter');
        if (!$(this).find('.filter-material-and-color-text').data('filter-blocks-show3')) {
            $(this).find('.filter-material-and-color-text').html('Свернуть');
            $(this).find('.filter-material-and-color-text').data('filter-blocks-show3', true);
        }
        else {
            $(this).find('.filter-material-and-color-text').html('Материал и цвет плафонов');
            $(this).find('.filter-material-and-color-text').data('filter-blocks-show3', false);
        }
    });

    $('.filter-more-parameters4').click(function () {
        $(this).next('.filter-show-more-block2').slideToggle(200);
        $('.icon',this).toggleClass('rotate-filter');
        if (!$(this).find('.filter-material-and-color-text').data('filter-blocks-show4')) {
            $(this).find('.filter-material-and-color-text').html('Свернуть');
            $(this).find('.filter-material-and-color-text').data('filter-blocks-show4', true);
        }
        else {
            $(this).find('.filter-material-and-color-text').html('Размеры');
            $(this).find('.filter-material-and-color-text').data('filter-blocks-show4', false);
        }
    });

    var items = $(".catalog-content-prodcut-item");
    var numItems = items.length;
    var perPage = 5;

    items.slice(perPage).hide();


    $('.catalog-pagination').pagination({
        items: numItems,
        itemsOnPage: perPage,
        ellipsePageSet: false,
        displayedPages: 4,
        edges: 2,
        prevText: "<div class='catalog-arrow-prev catalog-arrows teamlight-arrow-hover'><svg class='icon icon-arrow-prev'><use xlink:href='static/img/svg/symbol/sprite.svg#arrow-prev'></use></svg></div>",
        nextText: "<div class='catalog-arrow-next catalog-arrows teamlight-arrow-hover'><svg class='icon icon-arrow-next'><use xlink:href='static/img/svg/symbol/sprite.svg#arrow-next'></use></svg></div>",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
            $('.catalog-pag-show-items').text(showFrom);
        }

    });

    $('.catalog-count-pagination-all').text(numItems);



});
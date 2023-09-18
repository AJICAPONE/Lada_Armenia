$(document).ready(function () {

    // Фильтр цена
    $(function () {
        $('#mobile-filter-slider').slider({
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
                $('#mobile-hidden1').val(ui.values[0]);
                $('#mobile-hidden2').val(ui.values[1]);


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#mobile-filter-slider").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#mobile-filter-slider").slider( "option", "min" );
        var max = $("#mobile-filter-slider").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#mobile-price-reset').click(function () {
            $('#mobile-hidden1').val('');
            $('#mobile-hidden2').val('');
        });
    });



    // Фильтр прощадь свечения
    $(function () {
        $('#mobile-filter-slider2').slider({
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
                $('#mobile-light1').val(ui.values[0] + ' м²');
                $('#mobile-light2').val(ui.values[1] + ' м²');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#mobile-filter-slider2").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#mobile-filter-slider2").slider( "option", "min" );
        var max = $("#mobile-filter-slider2").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#mobile-light-reset').click(function () {
            $('#mobile-light1').val('');
            $('#mobile-light2').val('');
        });
    });



    // Фильтр Количество ламп
    $(function () {
        $('#mobile-filter-slider3').slider({
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
                $('#mobile-count-light1').val(ui.values[0] + ' Шт');
                $('#mobile-count-light2').val(ui.values[1] + ' Шт');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#mobile-filter-slider3").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#mobile-filter-slider3").slider( "option", "min" );
        var max = $("#mobile-filter-slider3").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#count-reset').click(function () {
            $('#mobile-count-light1').val('');
            $('#mobile-count-light2').val('');
        });
    });

    // Фильтр Количество плафонов
    $(function () {
        $('#mobile-filter-slider4').slider({
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
                $('#mobile-count-plafon1').val(ui.values[0] + ' Шт');
                $('#mobile-count-plafon2').val(ui.values[1] + ' Шт');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#mobile-filter-slider4").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#mobile-filter-slider4").slider( "option", "min" );
        var max = $("#mobile-filter-slider4").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#mobile-count-reset2').click(function () {
            $('#mobile-count-plafon1').val('');
            $('#mobile-count-plafon2').val('');
        });
    });



    // Фильтр Количество ламп
    $(function () {
        $('#mobile-filter-slider5').slider({
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
                $('#mobile-count-power1').val(ui.values[0] + ' Вт');
                $('#mobile-count-power2').val(ui.values[1] + ' Вт');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#mobile-filter-slider5").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#mobile-filter-slider5").slider( "option", "min" );
        var max = $("#mobile-filter-slider5").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#mobile-count-reset3').click(function () {
            $('#mobile-count-power1').val('');
            $('#mobile-count-power2').val('');
        });
    });


    // Фильтр Высота
    $(function () {
        $('#mobile-filter-slider6').slider({
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
                $('#mobile-count-height1').val(ui.values[0] + ' см');
                $('#mobile-count-height2').val(ui.values[1] + ' см');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#mobile-filter-slider6").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#mobile-filter-slider6").slider( "option", "min" );
        var max = $("#mobile-filter-slider6").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#mobile-count-reset4').click(function () {
            $('#mobile-count-height1').val('');
            $('#mobile-count-height2').val('');
        });
    });

    // Фильтр Высота
    $(function () {
        $('#mobile-filter-slider7').slider({
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
                $('#mobile-count-longer1').val(ui.values[0] + ' см');
                $('#mobile-count-longer2').val(ui.values[1] + ' см');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#mobile-filter-slider7").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#mobile-filter-slider7").slider( "option", "min" );
        var max = $("#mobile-filter-slider7").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#mobile-count-reset5').click(function () {
            $('#mobile-count-longer1').val('');
            $('#mobile-count-longer2').val('');
        });
    });


    // Фильтр Ширина
    $(function () {
        $('#mobile-filter-slider8').slider({
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
                $('#mobile-count-width1').val(ui.values[0] + ' см');
                $('#mobile-count-width2').val(ui.values[1] + ' см');


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#mobile-filter-slider8").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#mobile-filter-slider8").slider( "option", "min" );
        var max = $("#mobile-filter-slider8").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#count-reset6').click(function () {
            $('#mobile-count-width1').val('');
            $('#mobile-count-width2').val('');
        });
    });




});
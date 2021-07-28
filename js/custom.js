$(function() {
    //banner slider;
    $('.banner-slider').slick({
        arrows: false,
        autoplay: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,

    });

    // about-vedio pop up;
    $('.venobox').venobox();

    //team slider;
    $('.team-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,

        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }

        ]
    });

    //feedback-slider;
    $('.feedback-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,

        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //funfact counter;
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //brand slider;
    $('.brand-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<i class="fa fa-chevron-left prevBtn"></i>',
        nextArrow: '<i class="fa fa-chevron-right nextBtn"></i>',


        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            },

            // {
            //     breakpoint: 576,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1,
            //         dots: false,
            //     }
            // }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //color picker;
    $('.color-picker .color-icon').on('click', function() {
        $('.color-picker').toggleClass('color-picker-pos');
    });

    $('.color-picker .color-icon').on('click', function() {
        $('.color-picker').toggleClass('color-picker-rotate');
    });
    $('.color-picker ul .green').on('click', function() {
        $('body').addClass('green').removeClass('blue').removeClass('orange').removeClass('purple').removeClass('default');
    });
    $('.color-picker ul .blue').on('click', function() {
        $('body').addClass('blue').removeClass('green').removeClass('orange').removeClass('purple').removeClass('default');
    });
    $('.color-picker ul .orange').on('click', function() {
        $('body').addClass('orange').removeClass('blue').removeClass('green').removeClass('purple').removeClass('default');
    });
    $('.color-picker ul .purple').on('click', function() {
        $('body').addClass('purple').removeClass('blue').removeClass('orange').removeClass('green').removeClass('default');
    });
    $('.color-picker ul .default').on('click', function() {
        $('body').addClass('default').removeClass('blue').removeClass('orange').removeClass('purple').removeClass('green');
    });
    $('.dark-mode .change-mode').on('click', function() {
        $('body').toggleClass('position');
    });
});
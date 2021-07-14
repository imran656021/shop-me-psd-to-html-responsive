$(document).ready(function() {
    $('.navbar-nav .nav-item').on('click', function() {
        $('.navbar-nav').find('.active').removeClass('active');
        $(this).addClass('active');
    });
    //   sticky menu =======================
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('#nav-bar').addClass('sticky');

        } else {
            $('#nav-bar').removeClass('sticky');

        }
    });

    // middle content buttons active 

    $('.middle-content .buttons button').on('click', function() {
        $('.middle-content .buttons').find('.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.submenu ul li').on('click', function() {
        $('.submenu ul').find('.active').removeClass('active');
        $(this).addClass('active');
    });
    // ====fututre buttons active===========
    $('.future-product .f-buttons button').on('click', function() {
        $('.future-product .f-buttons').find('.active').removeClass('active');
        $(this).addClass('active');
    });
    // ============news carousel======================
    var news = $('.news-carousel');
    news.owlCarousel({
        loop: true,
        // margin: 20,
        nav: false,
        autoplay: false,
        // stagePadding: 50,
        dots: false,
        center: true,
        autoplayTimeout: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    $('.news-nxt').click(function() {
            news.trigger('next.owl.carousel');
        })
        // Go to the previous item
    $('.news-prv').click(function() {

        news.trigger('prev.owl.carousel');
    })

    // ======product details carousel-=================


    // ======seller carousel-=================
    // ======seller carousel-=================
    var seller = $('.seller-carousel');
    seller.owlCarousel({
        loop: true,
        // margin: 20,
        nav: false,
        autoplay: false,
        // stagePadding: 50,
        dots: false,
        center: true,
        autoplayTimeout: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    $('.seller-nxt').click(function() {
            seller.trigger('next.owl.carousel');
        })
        // Go to the previous item
    $('.seller-prv').click(function() {

        seller.trigger('prev.owl.carousel');
    })

    // ========================brand carousel------=============

    var brand = $('.brand-carousel');
    brand.owlCarousel({
        loop: true,
        // margin: 10,
        nav: false,
        autoplay: true,
        // stagePadding: 50,
        dots: false,
        center: true,
        autoplayTimeout: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    $('.brand-nxt').click(function() {
            brand.trigger('next.owl.carousel');
        })
        // Go to the previous item
    $('.brand-prv').click(function() {

            brand.trigger('prev.owl.carousel');
        })
        // ===========future owl carousel part script===================


    var future = $('.future-carousel1');
    future.owlCarousel({
        loop: true,
        // margin: 20,
        nav: false,
        autoplay: false,
        // stagePadding: 50,
        dots: false,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    $('.owl-nxt').click(function() {
        future.trigger('next.owl.carousel');
    })
    $('.owl-prv').click(function() {
        future.trigger('prev.owl.carousel');
    })

    // ========owl carousel end =================
    // brand carousel



    // =============end brand carousel=================


});

var userName;

function userSelect() {


    var userId = Math.floor((Math.random() * 5) + 1);
    if (userId == 1) {
        userName = "Sabbir";
    } else if (userId == 2) {
        userName = "kawsar";
    } else if (userId == 3) {
        userName = "Sagor";
    } else if (userId == 4) {
        userName = "Shahin Kaka";
    } else {
        userName = "Mukul Vai";
    }


    // console.log(userName);
    // document.write(userName);
    document.getElementById("user").innerHTML = "Created by    @" + userName;

}
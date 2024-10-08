jQuery(document).ready(function ($) {

//---------------------------- CAROUSEL FOR BANNER ------------------------------------//
$(document).ready(function () {
    var owl1 = $('#banner_carousel');
    owl1.owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        items: 1
    });
});    


//---------------------------- CAROUSEL FOR BANNER ------------------------------------//

//---------------------------- CAROUSEL FOR TESTIMONIAL ------------------------------------//

    $(document).ready(function () {
        var owl1 = $('#testimonials_carousel');
        owl1.owlCarousel({
            nav: false,
            dots: false,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplaySpeed: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1299: {
                    items: 1
                }
            }
        });

        $('#prev').click(function () {
            owl1.trigger('prev.owl.carousel');
        });
        $('#next').click(function () {
            owl1.trigger('next.owl.carousel');
        });
    });

//---------------------------- CAROUSEL FOR TESTIMONIAL ------------------------------------//

//---------------------------- CAROUSEL FOR GALLERY ------------------------------------//

    $(document).ready(function () {
        var owl2 = $('#gallery_carousel');
        owl2.owlCarousel({
            nav: false,
            dots: false,
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1299: {
                    items: 3
                }
            }
        });
    });

//---------------------------- CAROUSEL FOR GALLERY ------------------------------------//

//---------------------------- CAROUSEL FOR SMILAR-PRODUCT-SMALL ------------------------------------//

$(document).ready(function () {
    var owl3 = $('#similar_products_carousel');
    owl3.owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            },
            1299: {
                items: 3
            }
        }
    });
});

//---------------------------- CAROUSEL FOR SMILAR-PRODUCT-SMALL ------------------------------------//

});
(function ($) { 

    "use strict";

    var four_item_carosel = function ($scope, $) {
        
        // Four Item Carousel
        if ($('.four-item-carousel').length) {
            $('.four-item-carousel').owlCarousel({
                loop:true,
                margin:30,
                nav:true,
                smartSpeed: 500,
                autoplay: 1000,
                navText: [ '<span class="icon-Arrow-Left"></span>', '<span class="icon-Arrow-Right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    800:{
                        items:3
                    },
                    1024:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            });    		
        }


    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/popular_product.default', four_item_carosel);
        elementorFrontend.hooks.addAction('frontend/element_ready/hanta_feature_slider.default', four_item_carosel);
        elementorFrontend.hooks.addAction('frontend/element_ready/funface_section.default', four_item_carosel);
    });
})(window.jQuery);
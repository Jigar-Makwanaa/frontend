(function ($) { 

    "use strict";

    var clients_carousel_js = function ($scope, $) {
        
        // clients-carousel
        if ($('.clients-carousel').length) {
            $('.clients-carousel').owlCarousel({
                loop:true,
                margin:30,
                nav:false,
                smartSpeed: 3000,
                autoplay: true,
                navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    800:{
                        items:4
                    },			
                    1200:{
                        items:6
                    }

                }
            });    		
        }

    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/clients_section.default', clients_carousel_js);
    });
})(window.jQuery);
(function ($) { 

    "use strict";

    var testimonial_js = function ($scope, $) {
        
        // single-item-carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 3000,
			autoplay: true,
			navText: [ '<span class="fal fa-long-arrow-left"></span>', '<span class="fal fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},			
				1200:{
					items:1
				}

			}
		});    		
	}

    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/testimonial_section.default', testimonial_js);
        elementorFrontend.hooks.addAction('frontend/element_ready/testimonial_section.testimonial', testimonial_js);
    });
})(window.jQuery);
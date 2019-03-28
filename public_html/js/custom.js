$(document).ready(function() {
	// js isotope for filter start
	$('.grid').isotope({
		itemSelector : '.grid-item',
	});
	$('.filter_btns li a.btn').on('click', function () {
		$('.filter_btns li a.btn').removeClass('active_filter');
		$(this).addClass('active_filter');
	});
	$('.filter_btns li a.btn').on('click', function () {
		var filterValue = $(this).attr('data-filter');
		$('.grid').isotope({filter: filterValue});
	});
	// js isotope for filter end
    // js image open in popup start
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
    // js image open in popup end
	// js slider start
	$('.product_detail_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-3x fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-3x fa-angle-left" aria-hidden="true"></i></button>',
        asNavFor: '.product_detail_slider_nav'
    });
    $('.product_detail_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-2x fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-2x fa-angle-left" aria-hidden="true"></i></button>',
        asNavFor: '.product_detail_slider'
    });
    // js slider end

    //js accordion start
    $( function() {
        $( ".day_wise_itinerary_accordion" ).accordion({
            collapsible: true,
            heightStyle: "content"
        });
    });
    //js accordion end
});
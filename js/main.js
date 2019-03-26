function stikyHeader(){
	if($(window).scrollTop() > 200){
		$('.header').addClass('fixed');
	}else{
		$('.header').removeClass('fixed');
	}
}

$(document).ready(function() {
	
	$('.main-slider').slick({
		slidesToScroll: 1,
 		arrows:false,
 		dots: true,
 		autoplay: true,
 		autoplaySpeed:4000,
 		pauseOnHover:false,
 		pauseOnFocus:false,
 		customPaging : function(slider, i) {
	        var slide_title = $(slider.$slides[i]).find('.main-slider-item').data('slide-name');
	        var slide_dot = '<div class="slide_dot"><div class="indicator"></div><p><strong>0'+(i+1)+'</strong> '+slide_title+'</p></div>';
	        return slide_dot;
	    }
	});

		$('.toogle-mobile-menu').click(function(e) {
			e.preventDefault();
			$('body').toggleClass('menu-opened');
		});


	$('.second-slider').slick({
		
	});

	$('.third-slider').slick({
		
	});

	$('.instagram-photo').fancybox({

	});
	$('.images').fancybox({

	});
});
	



$(window).on('load scroll', stikyHeader);
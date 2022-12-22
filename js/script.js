$(document).ready(function(){
  $('.main-slider').slick({
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
  });

  $('.header-nav__burger').on('click', function(event) {
  	event.preventDefault();
  	$('.header-mobile').slideToggle();
  });

  $('#order-btn').on('click', function(event) {
  	event.preventDefault();
  	$('#order-popup').fadeIn();
  });

  $('.popup-content-times').on('click', function(event) {
  	event.preventDefault();
  	$('.popup').fadeOut();
  });

	
	var $win = $('.popup'); // or $box parent container
	var $box = $(".popup-content");
	
	$win.on("click.Bst", function(event){		
		if ( $box.has(event.target).length == 0 && !$box.is(event.target) ){
			$('.popup').fadeOut();
			$('body').css({
				overflow: 'auto'
			});
		} 
	});




});
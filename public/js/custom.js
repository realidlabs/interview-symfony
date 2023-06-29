$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    loop: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
    dots: true,
      },
      600: {
        items: 3,
        nav: false,
    dots: true,
      },
      1000: {
        items: 6
      }
    }
  })
})

//Header sticky start
$(window).scroll(function() {
	var width = $(window).width();
    if ($(this).scrollTop() > 80){  
        $('.headerbg').addClass("sticky");
		if (width <= 767) {
			$('.headerbg').removeClass("sticky");
		}
    }
    else{
        $('.headerbg').removeClass("sticky");
    }
});
//Header sticky end

// Scroll Start
jQuery(".reqbtn").on('click', function(event) {
	if (this.hash !== "") {
	  event.preventDefault();
	  var hash = this.hash;
	  jQuery('html, body').animate({
			scrollTop: jQuery(hash).offset().top
	  }, 1000, function(){
		//window.location.hash = hash;
	  });
	}
});
// Scroll End

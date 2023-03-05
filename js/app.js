$(function () {
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

		var scrollPrev = 0;

    $(window).scroll(function() {
	    var scrolled = $(window).scrollTop();
 
	    if ( scrolled > 100 && scrolled > scrollPrev ) {
		    header.addClass("out");
	    } else {
		    header.removeClass("out");
	    }
	    scrollPrev = scrolled;
    });
  
    /* Smooth Scroll*/
    $("[data-scroll]").on("click", function (event) {
      event.preventDefault();
  
      let elementId = $(this).data("scroll");
      let elementOffset = $(elementId).offset().top;
  
      nav.removeClass("show");
  
      $("html, body").animate(
        {
          scrollTop: elementOffset - 70,
        },
        700
      );
    });
  
    /* NavToggle */
    navToggle.on("click", function (event) {
      event.preventDefault();
      nav.toggleClass("show");
    });
  
    /* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");
  
    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true,
    });
  });
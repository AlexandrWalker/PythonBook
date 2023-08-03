$(function () {
  let header = $("#header");
  let intro = $("#intro");
  let nav = $("#nav");
  let mobMenu = $("#mobMenu");
  let burger = $("#burger");

  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  var scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
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
  burger.on("click", function (event) {
    event.preventDefault();
    burger.toggleClass("active");
    mobMenu.toggleClass("show");
  });
});
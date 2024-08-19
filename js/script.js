// Dropdown Effect

$(document).ready(function () {
  $(".key .open").click(function () {
    $(".menu").fadeIn();
    $(".key .open").fadeOut();
    $(".key .close").fadeIn();
  });

  $(".key .close").click(function () {
    $(".menu").fadeOut();
    $(".key .open").fadeIn();
    $(".key .close").fadeOut();
  });
});
console.log();

// Scroll JS

$(window).scroll(function () {
  var windowOffset = $(this).scrollTop();
  if ($(window).width() > 768) {
    if (windowOffset >= $(".biography").offset().top) {
      $(".menu").fadeIn();
    } else {
      $(".menu").fadeOut();
    }
  }
});

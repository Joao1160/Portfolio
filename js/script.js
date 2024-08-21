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

  if ($(window).width() < 768) {
    $(".menu li a").click(function () {
      $(".menu").fadeOut();
      $(".key .open").fadeIn();
      $(".key .close").fadeOut();
    });
  }
});

// Scroll JS

var homeOffset = $("#landing").offset().top - 50;
var aboutOffset = $("#biography").offset().top - 50;
var abilityOffset = $("#ability").offset().top - 50;
var skillsOffset = $("#skills").offset().top - 50;
var experienceOffset = $("#experience").offset().top - 50;
var myProjectsOffset = $("#my-projects").offset().top - 50;
// var contactOffset = $("#contact").offset().top - 50;

$(window).scroll(function () {
  var windowOffset = $(this).scrollTop();

  if ($(window).width() > 768) {

    if (windowOffset >= $(".biography").offset().top) {
      $(".menu").fadeIn();
    } else {
      $(".menu").fadeOut();
    }

    if (windowOffset >= homeOffset && windowOffset <= aboutOffset) {
      console.log("True");
      $(".menu li a").removeClass("active");
      $(".menu li:nth-child(2) a").addClass("active");
    }
    if (windowOffset >= aboutOffset && windowOffset <= abilityOffset) {
      $(".menu li a").removeClass("active");

      $(".menu li:nth-child(3) a").addClass("active");
    }
    if (windowOffset >= abilityOffset && windowOffset <= skillsOffset) {
      $(".menu li a").removeClass("active");

      $(".menu li:nth-child(4) a").addClass("active");
    }
    if (windowOffset >= skillsOffset && windowOffset <= experienceOffset) {
      $(".menu li a").removeClass("active");

      $(".menu li:nth-child(5) a").addClass("active");
    }
    if (windowOffset >= experienceOffset && windowOffset <= myProjectsOffset) {
      $(".menu li a").removeClass("active");

      $(".menu li:nth-child(6) a").addClass("active");
    }
    if (windowOffset >= myProjectsOffset) {
      //&& windowOffset <= contactOffset
      $(".menu li a").removeClass("active");
      $(".menu li:nth-child(7) a").addClass("active");
    }
    // if (windowOffset >= contactOffset) {
    //   $(".menu li a").removeClass("active");

    //   $(".menu li:nth-child(6) a").addClass("active");
    // }
  }
});

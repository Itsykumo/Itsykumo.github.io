particlesJS.load('particles-js', '/assets/js/particlesjs-config.json');

$('.logo').mouseover(function () {
  $('body').addClass('body-hover');
}).mouseout(function () {
  $('body').removeClass('body-hover');
});

var lastScroll = 0;
var scrollUpDistance = 0;
var scrollDownDistance = 0;

$(document).scroll(function (e) {
  var currentScroll = $(document).scrollTop();

  if (currentScroll >= 120) {
    $('#left-navbar > .logo').addClass('logo-park');
  } else {
    $('#left-navbar > .logo').removeClass('logo-park');
  }

  if (currentScroll < lastScroll) {
    scrollUpDistance += (lastScroll - currentScroll);

    if (scrollUpDistance >= 200) {
      scrollDownDistance = 0;
    }
  } else {
    scrollDownDistance += (currentScroll - lastScroll);

    if (scrollDownDistance >= 200) {
      scrollUpDistance = 0;
    }
  }

  lastScroll = currentScroll;

  if (scrollDownDistance >= 200 && currentScroll > 100) {
    $('#main-header .logo').slideUp();
  } else if (scrollUpDistance >= 100 || currentScroll <= 100) {
    $('#main-header .logo').slideDown();
  }
});
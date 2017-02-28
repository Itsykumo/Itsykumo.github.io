particlesJS.load('particles-js', '/assets/js/particlesjs-config.json');

$('#left-navbar > .logo').mouseover(function () {
  $('body').addClass('body-hover');
}).mouseout(function () {
  $('body').removeClass('body-hover');
});
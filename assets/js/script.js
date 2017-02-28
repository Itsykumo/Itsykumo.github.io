particlesJS.load('particles-js', '/assets/js/particlesjs-config.json');

$('#left-navbar > .logo').mouseover(function () {
  $('body').addClass('body-hover');
}).mouseout(function () {
  $('body').removeClass('body-hover');
});

$(document).scroll(function (e){
  if ($(document).scrollTop() >= 120) {
    $('#left-navbar > .logo').addClass('logo-park');
  } else {
    $('#left-navbar > .logo').removeClass('logo-park');
  }
})

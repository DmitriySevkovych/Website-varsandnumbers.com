if (document.documentElement.lang == 'ru') {
  document.body.style.fontFamily = 'Roboto Slab';
}

/*
Document ready function
*/
$(function () {
  $sm = $(window).width() < 768;

  new Vivus('logoMain', {
    type: "oneByOne",
    duration: 250,
    pathTimingFunction: Vivus.EASE,
    animTimingFunction: Vivus.EASE_IN
  }, (obj) => {
    obj.el.classList.add('logo-post-animation');

    setTimeout(function () {
      if ($sm) {
        $('#titleBox').fadeOut(300, function () {
          $('#contentBox').fadeIn(500).removeClass('d-none');
        });
      } else {
        initBackgroundAnimation();
      }
    }, 1000);

  });

});

function initBackgroundAnimation() {
  $('#darkBox').toggleClass('animate-dark-box');
  $('#lightBox').toggleClass('animate-light-box');

  setInterval(function () {
    $('#darkBox').toggleClass('animate-dark-box');
    $('#lightBox').toggleClass('animate-light-box');
  }, 9500);
}
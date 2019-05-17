if (document.documentElement.lang == 'ru') {
  document.body.style.fontFamily = 'Roboto Slab';
}

/*
Document ready function
*/
$(function() {
  $sm = $(window).width() < 768;
  if ($sm) {
    initLogoClickHandler();
  } else {
    initBackgroundAnimation();
  }
});


function initLogoClickHandler() {
  $logo = $('#titleBox');
  $content = $('#contentBox');

  $logo.on('click', function() {
    $logo.fadeOut(300, function() {
      $content.fadeIn(500).removeClass('d-none');
    });
  });
}


function initBackgroundAnimation() {
  setTimeout(function() {
    $('#darkBox').toggleClass('animate-dark-box');
    $('#lightBox').toggleClass('animate-light-box');

    setInterval(function() {
      $('#darkBox').toggleClass('animate-dark-box');
      $('#lightBox').toggleClass('animate-light-box');
    }, 9500);
  }, 3000);
}

// if (document.documentElement.lang == 'ru') {
//   document.body.style.fontFamily = 'Roboto Slab';
// }

/*
Document ready function
*/
$(function() {
  $sm = $(window).width() < 768;

  $navLogo = $('.navbar-toggler');
  $navBlend = $('.nav-blend');

  $navLogo.on('click', function() {
    $navBlend.fadeToggle(300);
  });

  if ($sm) {
    initLogoClickHandler();
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

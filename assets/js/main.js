/*
Document ready function
*/
$(function() {
  $md = $(window).width() < 992;
  $sm = $(window).width() < 768;

  if ($md) {
    $navLogo = $('.navbar-toggler');
    $navBlend = $('.nav-blend');

    $navLogo.on('click', function() {
      $navBlend.fadeToggle(300);
    });
  }

  if ($sm) {
    initLogoClickHandler();
  }
});


function initLogoClickHandler() {
  $logo = $('#titleBox');
  $content = $('#contentBox');

  $logo.on('click', function() {
    $logo.fadeOut(300, function() {
      $content.removeClass('d-none').fadeIn(300);
    });
  });
}

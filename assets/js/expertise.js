/*
Document ready function
*/
$(function() {
  $md = $(window).width() < 992;

  $navLogo = $('.navbar-toggler');
  $navBlend = $('.nav-blend');

  $navLogo.on('click', function() {
    if ($md) {
      $navBlend.fadeToggle(300);
    }
  });
});

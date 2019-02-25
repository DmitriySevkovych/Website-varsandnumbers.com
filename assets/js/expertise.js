/*
Document ready function
*/
$(function() {
  $navLogo = $('.navbar-toggler');
  $navBlend = $('.nav-blend');

  $navLogo.on('click', function() {
      $navBlend.fadeToggle(300);
  });
});

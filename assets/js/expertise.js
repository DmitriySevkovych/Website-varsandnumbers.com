/*
Document ready function
*/
$(function() {
  $navLogo = $('.navbar-toggler');
  $navBlend = $('.nav-blend');

  $navLogo.on('click', function() {
      $navBlend.fadeToggle(300);
  });

  $('[data-toggle="popover"]').on('click', function(){
    $popup = $('[data-popup="' + this.id + '"]');
    $popup.fadeIn(400);
    $popup.addClass('popup-open');
  });

  $('.expertise-popup').on('click', function(){
    $popup = $('.popup-open');
    $popup.fadeOut(400);
    $popup.removeClass('popup-open');
  });
});

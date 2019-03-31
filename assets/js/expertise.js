/*
Document ready function
*/
$(function() {
  $navLogo = $('.navbar-toggler');
  $navBlend = $('.nav-blend');

  $navLogo.on('click', function() {
      $navBlend.fadeToggle(300);
  });

  // $.get('./assets/popovers/popover_expSimulation.html', function(markup){
  //   $('[data-toggle="popover"]').popover({
  //     html : true,
  //     content : markup
  //   });
  // });

  // $('[data-toggle="popover"]').popover();
  $('[data-toggle="popover"]').on('click', function(){
    $popup = $('[data-popup="' + this.id + '"]');
    $popup.show(300);
    $popup.addClass('popup-open');
  });

  $('.expertise-popup').on('click', function(){
    $popup = $('.popup-open');
    $popup.hide(300);
    $popup.removeClass('popup-open');
  });
});

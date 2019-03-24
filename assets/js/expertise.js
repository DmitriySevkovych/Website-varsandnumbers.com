/*
Document ready function
*/
$(function() {
  $navLogo = $('.navbar-toggler');
  $navBlend = $('.nav-blend');

  $navLogo.on('click', function() {
      $navBlend.fadeToggle(300);
  });


  $.get('./assets/popovers/popover_expSimulation.html', function(markup){
    $('[data-toggle="popover"]').popover({
      html : true,
      content : markup
    });
  });



  // $('[data-toggle="popover"]').popover();
});

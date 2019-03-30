/*
Document ready function
*/
$(function() {
  $navLogo = $('.navbar-toggler');
  $navBlend = $('.nav-blend');

  $navLogo.on('click', function() {
      $navBlend.fadeToggle(300);
  });

  // console.log($("#expFrameMaths").position());
  // console.log($("#expFrameMaths").width());
  // console.log($("#expFrameMaths").height());

  // $.get('./assets/popovers/popover_expSimulation.html', function(markup){
  //   $('[data-toggle="popover"]').popover({
  //     html : true,
  //     content : markup
  //   });
  // });



  // $('[data-toggle="popover"]').popover();
  $('[data-toggle="popover"]').on('click', function(){
    $('.expertise-popup').fadeIn(300);
  });

  $('.expertise-popup').on('click', function(){
    $('.expertise-popup').fadeOut(300);
  });
});

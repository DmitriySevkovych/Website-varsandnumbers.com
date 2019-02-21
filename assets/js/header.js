function navbarClickHandler() {
  $md = $(window).width() < 992;

  $logo = $('.navbar-toggler');
  $navList = $('#navbarResponsive ul');
  $navBlend = $('.nav-blend');

  $logo.on('click', function() {
    if ($md) {
      $navBlend.fadeToggle(300);
    }
  });
}

module.exports = navbarClickHandler;

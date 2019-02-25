var contact = document.getElementById('m');
contact.innerHTML = 'info' + '@' + '<span>vars</span>and<span>numbers</span>' + '.' + 'com';

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

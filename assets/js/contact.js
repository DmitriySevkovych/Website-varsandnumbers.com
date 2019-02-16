var contact = document.getElementById('mBig');
contact.innerHTML = 'info' + '@' + '<span>vars</span>and<span>numbers</span>' + '.' + 'com';

var contactform = document.getElementById('formaction');
contactform.setAttribute('action', '//formspree.io/' + 'd.sevkovych' + '@' + 'varsandnumbers' + '.' + 'com');


/*
Document ready function
*/
$( function() {
  $md = $(window).width() < 992;

  $logo = $('.navbar-toggler');
  $navList = $('#navbarResponsive ul');
  $navBlend = $('.nav-blend');

  $logo.on('click', function(){
    $navBlend.fadeToggle(300);
  });
});

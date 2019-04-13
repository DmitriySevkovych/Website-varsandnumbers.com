var contact = document.getElementById('mBig');
contact.innerHTML = 'info' + '@' + '<span>vars</span>and<span>numbers</span>' + '.' + 'com';

var contactform = document.getElementById('formaction');
contactform.setAttribute('action', '//formspree.io/' + 'd.sevkovych' + '@' + 'varsandnumbers' + '.' + 'com');


/*
Document ready function
*/
$(function() {
  $sm = $(window).width() < 576;

  $navLogo = $('.navbar-toggler');
  // $navList = $('#navbarResponsive ul');
  $navBlend = $('.nav-blend');

  $navLogo.on('click', function() {
    $navBlend.fadeToggle(300);
  });

  // Positioning
  $contactForm = $('#contactForm');
  $contactText = $('#contactText');
  $contactInfo = $('#contactInfo');
  // $footer = $('footer');
  if ($sm) {
    // $contactText.position({
    //   my: 'center top',
    //   at: 'center top+' + $("body").height() * 2  / 12,
    //   of: 'body'
    // });
    // $contactForm.position({
    //   my: 'center top',
    //   at: 'center bottom+' + $("body").height() * 1  / 12,
    //   of: '#contactText'
    // });
    // $contactInfo.position({
    //   my: 'center bottom',
    //   at: 'center bottom+' + $("body").height() * 1  / 12,
    //   of: 'body'
    // });
    // $footer.position({
    //   my: 'center bottom',
    //   at: 'center bottom',
    //   of: '.main-container'
    // });
  } else {
    $contactForm.position({
      my: 'center center',
      at: 'center center+50',
      of: 'body'
    });
    $contactText.position({
      my: 'center center',
      at: 'center top+' + $("body").height() / 4,
      of: 'body'
    });
    $contactInfo.position({
      my: 'center bottom',
      at: 'center bottom',
      of: 'body'
    });
    $footer.position({
      my: 'center bottom',
      at: 'center bottom',
      of: 'body'
    });
  }

});

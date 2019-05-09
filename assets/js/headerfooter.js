if (document.documentElement.lang == 'en') {
  document.getElementById('linkImprint').innerHTML = 'Imprint';
  document.getElementById('linkPrivacy').innerHTML = 'Privacy Statement';
} else if (document.documentElement.lang == 'de') {
  document.getElementById('linkImprint').innerHTML = 'Impressum';
  document.getElementById('linkPrivacy').innerHTML = 'Datenschutz';
}

/*
Document ready function
*/
$(function() {

  $('body').addClass('loaded');
  
  // Header
  $('.navbar-toggler').on('click', function() {
    $('.nav-blend').fadeToggle(300);
  });

  // Footer
  $('.lang').on('click', function() {
    var from = document.documentElement.lang;
    var to = this.dataset.lang;
    if (to != from) {
      $('body').addClass('leaving');
      setTimeout(changeLanguage(from, to), 200);
    }
  });

  function changeLanguage(from, to) {
    var url = window.location.href;
    var page = url.split('/')[url.split('/').length - 1];
    var folder = (to == 'en') ? '' : to + '/';
    var newUrl = '../' + folder + page;
    window.location.href = newUrl;
  }
});

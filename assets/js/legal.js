var contact = document.getElementById('m');
contact.innerHTML = 'info' + '@' + '<span>vars</span>and<span>numbers</span>' + '.' + 'com';

/*
Document ready function
*/
$(function() {

  var urlParts = window.location.href.split('#');
  var scrollTo = '#' + urlParts[urlParts.length - 1];

  $('html, body').delay(300).animate({
    scrollTop: $(scrollTo).offset().top - 150
  }, 1000);

});

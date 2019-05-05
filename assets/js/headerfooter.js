/*
Document ready function
*/
$(function() {

  var animation_duration = 300;

  $('body').addClass('loaded');

  // Header
  $('.navbar-toggler').on('click', function() {
    $('.nav-blend').fadeToggle(300);
  });

  $('header a').on('click', function(event) {
    event.preventDefault();

    var href = this.href;

    // $('body').removeClass('loaded');
    $('body').addClass('leaving');
    setTimeout(function() {
      window.location.href = href;
    }, animation_duration);
  });

  // Footer
  $('.lang').on('click', function() {
    var from = document.documentElement.lang;
    var to = this.dataset.lang;
    if (to != from) {
      $('body').addClass('leaving');
      setTimeout(changeLanguage(from, to), animation_duration);
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

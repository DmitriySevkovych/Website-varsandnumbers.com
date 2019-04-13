/*
Document ready function
*/
$(function() {
  $('.lang').on('click', function() {
    var gotoLang = this.dataset.lang;
    var docLang = document.documentElement.lang;


    if (gotoLang != docLang) {
      var url = window.location.href;
      var page = url.split('/')[url.split('/').length - 1];
      var folder = (gotoLang == 'en') ? '' : gotoLang + '/';
      var newUrl = '../' + folder + page;
      window.location.href = newUrl;
    }
  });
});

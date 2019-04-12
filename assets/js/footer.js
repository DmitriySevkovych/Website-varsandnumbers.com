/*
Document ready function
*/
$(function() {
  $('.lang').on('click', function() {
    var lang = document.documentElement.lang;
    var url = window.location.href;
    var page = url.split('/')[url.split('/').length - 1];

    if (this.dataset.lang != lang) {
      var newUrl = '../' + this.dataset.lang + '/' + page;
      window.location.href = newUrl;
    }
  });
});

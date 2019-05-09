var isExternal = function(url) {
    var domain = function(url) {
        return url.replace('http://','').replace('https://','').split('/')[0];
    };

    return domain(location.href) !== domain(url);
};

var isDownload = function(url) {
  return url.includes('/assets/downloads/');
};

$('a').on('click', function(event) {
  var href = this.href;

  if(!isExternal(href) && !isDownload(href))
  {
    event.preventDefault();

    $('body').addClass('leaving');
    setTimeout(function() {
      window.location.href = href;
    }, 200);
  }

});

$(function() {
  var $services = $('li');
  var $scrollContainer = $('.scrollable');

  var scrollDelta = 100;
  var scrollPosition = -1;
  var lastScrollTop = scrollPosition * scrollDelta;

  $scrollContainer.scroll(function(event) {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= scrollDelta)
      return;

    if (st > lastScrollTop) {
      scrollPosition++;
    } else {
      scrollPosition--;
    }
    lastScrollTop = st;

    updateScrollPrompt(scrollPosition);
    $.each($services, function() {
        updateServices(scrollPosition, $(this));
    });
    updateRoundup(scrollPosition);


  });
});


function updateScrollPrompt(scrollPosition) {
  var $scrollPrompt = $('#scroll-prompt');
  if (scrollPosition < 1) {
    // $scrollPrompt.show(300);
  } else {
    // $scrollPrompt.hide(300);
  }
}


function updateServices(scrollPosition, service) {
  var index = service.attr('data-index');

  service.removeClass();

  if (index == scrollPosition) {
    service.addClass('focused');
  } else if (index == scrollPosition - 1 || index == scrollPosition + 1) {
    service.addClass('fading');
  } else if (index < scrollPosition - 1) {
    service.addClass('faded');
  } else {
    service.addClass('yet-to-show');
  }
}

function updateRoundup(scrollPosition) {
  var $roundup = $('.round-up');

  if (scrollPosition > 8) {
    $roundup.removeClass('yet-to-show');
    $roundup.addClass('focused');
  } else {
    $roundup.removeClass('focused');
    $roundup.addClass('yet-to-show');
  }
}

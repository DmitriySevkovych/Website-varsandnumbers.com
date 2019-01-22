$(function() {
  var $services = $('li');
  var $scrollContainer = $('.scrollable');

  var scrollDelta = 200;
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

    if (scrollPosition < -1) {
      scrollPosition = -1;
    } else if (scrollPosition > 9) {
      scrollPosition = 9;
    }

    lastScrollTop = st;

    updateScrollPrompt(scrollPosition);
    $.each($services, function() {
      updateService(scrollPosition, $(this));
    });
    updateRoundup(scrollPosition);
  });
});


function updateScrollPrompt(scrollPosition) {
  var $scrollPrompt = $('.scroll-prompt');
  if (scrollPosition < 1 || scrollPosition > 7) {
    $scrollPrompt.css({
      opacity: 1
    });
  } else {
    $scrollPrompt.css({
      opacity: 0
    });
  }
}


function updateService(scrollPosition, service) {
  const index = service.attr('data-index');

  service.removeClass();

  if (index == scrollPosition) {
    service.addClass('focused');
  } else if (index == scrollPosition - 1 || index == scrollPosition + 1) {
    service.addClass('fading');
  } else if (index == scrollPosition - 2) {
    service.addClass('faded');
  } else {
    service.addClass('yet-to-show');
  }
  positionService(scrollPosition, service);
}


function positionService(scrollPosition, service) {

  const y = $('.graphics').height() / 2;
  const index = service.attr('data-index');
  var positionString;

  if (index == scrollPosition) {
    positionString = 'center center';
  } else if (index == scrollPosition + 1) {
    positionString = 'center center+' + y;
  } else if (index == scrollPosition - 1) {
    positionString = 'center center-' + y;
  } else if (index < scrollPosition - 1) {
    positionString = 'center center-' + 2*y;
  }

  service.position({
    my: 'center center',
    at: positionString,
    of: '.get-attention'
  });
}


function updateRoundup(scrollPosition) {
  var $roundup = $('.round-up');

  if (scrollPosition == 9) {
    $roundup.removeClass('yet-to-show');
    $roundup.slideDown(1000)
  } else {
    $roundup.slideUp(1000)
  }
}

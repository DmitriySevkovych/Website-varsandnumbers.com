/*
Document ready function
*/
$(function() {
  var $navbar = $('header .nav-bar');
  var $services = $('li');
  var $scrollContainer = $('.scrollable');

  var scrollDelta = 250;
  var scrollPosition = -1;
  var lastScrollTop = scrollPosition * scrollDelta;

  updateNavbar(scrollPosition, $navbar);

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

    updateNavbar(scrollPosition, $navbar);
    updateScrollPrompt(scrollPosition);
    $.each($services, function() {
      updateService(scrollPosition, $(this));
    });
    updateRoundup(scrollPosition);
  });
});

/*
Event handlers, TODO: extract the scroll handler
*/

/*
 Helper functions
*/
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
    positionString = 'center center-' + 2 * y;
  }

  service.position({
    my: 'center center',
    at: positionString,
    of: '.get-attention'
  });
}


function updateRoundup(scrollPosition) {
  var $roundup = $('.round-up');
  var $blend = $(".blend");
  var $plainTermsItems = $('.plain-terms li');

  if (scrollPosition == 9) {
    // $roundup.delay(1000).fadeIn(500);
    $roundup.delay(500).fadeIn(1000);
    $blend.fadeIn(1000);
  } else {
    $roundup.slideUp(700);
    $blend.fadeOut(1500);
  }

}

function updateNavbar(scrollPosition, navbar) {

  // var zIndex = 3;

  if (scrollPosition == 9 || scrollPosition == -1) {
    navbar.css({
      'z-index': 2
    });
  } else {
    navbar.css({
      'z-index': 999
    });
  }

}

/*
 * Plain JS to execute on page load
 */
var instructionSpan = document.getElementById('instruction');
var instruction = window.innerWidth < 992 ? 'swipe left' : 'scroll down';
instructionSpan.innerHTML = instruction;

var lock = false;

/*
 * Header stuff
 */
$(function() {
  var $logo = $('.navbar-toggler');
  var $navBlend = $('.nav-blend');

  $logo.on('click', function() {
    $navBlend.fadeToggle(300);
  });
});

/*
 * Document ready function
 */
$(function() {
  var $services = $(".services-scrollable");



  // Initialize the scroll event handler and the slick carousel
  $services.on("init", function() {
    initMouseWheelHandler($services);
    if (window.innerWidth < 992) {
      initSwipeHandlers();
    }
  }).slick({
    dots: false,
    arrows: false,
    infinite: false,
    centerMode: true,
    speed: 1000,
    fade: true,
    // cssEase: 'linear',
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 992,
        settings: {
          fade: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          fade: false
        }
      }
    ]
  });

  // Position the scrollable elements
  if ($(window).width() >= 992) {
    $services.position({
      my: "right center",
      at: "right center",
      of: "body"
    });
  }

  function initMouseWheelHandler($services) {
    $(window).on("wheel", {
      $services: $services
    }, mouseWheelHandler);
  }

  function mouseWheelHandler(event) {
    event.preventDefault();

    if (lock) {
      return;
    }

    var $services = event.data.$services;
    var $currentIndex = $('.slick-current').data('slick-index');

    //Move to the next slick element
    var delta = event.originalEvent.deltaY;
    if (delta < 0) {
      $services.slick("slickPrev");
    } else {
      $services.slick("slickNext");
    }

    updateScreen($currentIndex, delta > 0);
  }

  function initSwipeHandlers() {

    $('.services-scrollable').swipe({
      swipeLeft: function(event, direction, distance, duration, fingerCount) {
        $current = $('.slick-current');
        var $currentIndex = $current.data('slick-index');
        updateScreen($currentIndex - 1, true);
      },
      swipeRight: function(event, direction, distance, duration, fingerCount) {
        $current = $('.slick-current');
        var $currentIndex = $current.data('slick-index');
        updateScreen($currentIndex + 1, false);
      },
      //Set distance that triggers a swipe
      threshold: 25
    });

    $('.services-round-up').swipe({
      swipeLeft: function(event, direction, distance, duration, fingerCount) {
        window.location.href = 'expertise.html';
      },
      swipeRight: function(event, direction, distance, duration, fingerCount) {
        var $currentIndex = $('.slick-current').data('slick-index');
        $('.services-scrollable').slick("slickPrev");
        updateScreen($currentIndex, false);
      }
    });

  }


  function updateScreen(index, next) {
    var $icon = $('.services-icons');
    var newIndex = next ? index + 1 : index - 1;
    var $servicesBlend = $('.services-blend');
    var $servicesRoundUp = $('.services-round-up');

    if (newIndex >= 0 && newIndex < 8) {
      lock = true;
      $icon.fadeToggle(500, function() {
        $icon.attr('src', 'assets/img/service-icons/service_' + newIndex + '.svg');
        $icon.fadeToggle(500, function() {
          lock = false;
        });
      });
      $servicesBlend.fadeOut(300);
      $servicesRoundUp.fadeOut(300);
    } else if (newIndex === 8) {
      $servicesBlend.fadeIn(300);
      $servicesRoundUp.fadeIn(300);
    }
  }



});

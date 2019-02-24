/*
 * Plain JS to execute on page load
 */
var instructionSpan = document.getElementById('instruction');
var instruction = window.innerWidth < 992 ? 'swipe left' : 'scroll down';
instructionSpan.innerHTML = instruction;

/*
 * Header stuff
 */
$(function() {
  var $logo = $('.navbar-toggler');
  var $navList = $('#navbarResponsive ul');
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

  $services.on("init", function() {
    mouseWheel($services);
    if (window.innerWidth < 992) {
      swipeHandler(this);
    }

  }).slick({
    dots: false,
    arrows: false,
    infinite: false,
    vertical: true,
    centerMode: true,
    speed: 1000,
    // fade: true,
    // cssEase: 'linear',
    centerPadding: '50px',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 992,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1,
          vertical: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1,
          vertical: false
        }
      }
    ]
  });

  function mouseWheel($services) {
    $(window).on("wheel", {
      $services: $services
    }, mouseWheelHandler);
  }

  function mouseWheelHandler(event) {
    event.preventDefault();
    var $services = event.data.$services;
    var $serviceIndex = $('.slick-current').data('slick-index');

    //Move to the next slick element
    var delta = event.originalEvent.deltaY;
    if (delta < 0) {
      $services.slick("slickPrev");
    } else {
      $services.slick("slickNext");
    }

    //Update the icon
    updateIcon($serviceIndex, delta > 0);

  }

  function swipeHandler(services) {
    $(".services-scrollable").swipe({
      //Single swipe handler for left swipes
      swipeLeft: function(event, direction, distance, duration, fingerCount) {
        $current = $('.slick-current');
        var $currentIndex = $current.data('slick-index');
        updateIcon($currentIndex, true);
      },
      //Single swipe handler for right swipes
      swipeRight: function(event, direction, distance, duration, fingerCount) {
        $current = $('.slick-current');
        var $currentIndex = $current.data('slick-index');
        updateIcon($currentIndex, false);
      },
      //Default is 75px, set to 0 for demo so any distance triggers swipe
      threshold: 25
    });
  }


  function updateIcon(index, next) {
    var $icon = $('.services-icons');
    var newIndex = next ? index + 1 : index - 1;

    if (newIndex > 0 && newIndex < 8) {
      $icon.fadeToggle(500, function() {
        $icon.attr('src', 'assets/img/service-icons/service_' + newIndex + '.svg');
        $icon.fadeToggle(500);
      });
    }

  }
});

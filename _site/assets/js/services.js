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
          centerPadding: '40px',
          slidesToShow: 1,
          vertical: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '40px',
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
    var $icon = $('.services-icons');

    //Move to the next slick element
    var delta = event.originalEvent.deltaY;
    if (delta < 0) {
      $services.slick("slickPrev");
    } else {
      $services.slick("slickNext");
    }

    //Update the icon
    if ($serviceIndex >= 0 && $serviceIndex < 7) {
      $icon.fadeToggle(500, function() {
        updateIcon($icon, $serviceIndex, delta > 0);
      });
    }
  }

  function updateIcon(control, index, next) {
    var newIndex = next ? index + 1 : index - 1;
    control.attr('src', 'assets/img/service-icons/service_' + newIndex + '.svg');
    control.fadeToggle(500);

  }
});

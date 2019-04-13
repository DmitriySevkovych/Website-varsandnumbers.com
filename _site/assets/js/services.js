/*
 * Plain JS to execute on page load
 */
var instructionSpan = document.getElementById('instruction');
if (document.documentElement.lang == 'en') {
  var instruction = window.innerWidth < 992 ? 'swipe left' : 'scroll down';
} else if (document.documentElement.lang == 'de') {
  var instruction = window.innerWidth < 992 ? 'nach links wischen' : 'nach unten scrollen';
}
instructionSpan.innerHTML = instruction;

var lock = false;



/*
 * Document ready function
 */
$(function() {
  var $services = $(".services-scrollable");
  var $servicesHeader = $(".services-header");
  var $servicesIcons = $(".services-icons");


  //Typewriter effect
  var $caret = $('#caret');
  var $typewriter = $('#typewriter');

  function blink() {
    if (!lock) {
      $caret.toggleClass('blink');
    } else {
      $caret.addClass('blink');
    }
  }
  window.setInterval(blink, 600);
  //Typewriter effect, end

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

  // Position some special elements
  if (window.innerWidth >= 992) {
    $servicesIcons.position({
      my: "center center",
      at: "center center",
      of: ".background"
    });
    $services.position({
      my: "right center",
      at: "right center",
      of: "body"
    });
    $servicesHeader.position({
      my: "center top",
      at: "center center-" + window.innerHeight / 3,
      of: ".services-icons"
    });
  } else {
    $servicesIcons.position({
      my: "center center",
      at: "center center-10",
      of: "body"
    });
    $servicesHeader.position({
      my: "center top",
      at: "center center-" + window.innerHeight / 3,
      of: ".services-icons"
    });
  }

  // Event handlers
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
      threshold: 10
    });

    $('.services-round-up').swipe({
      swipeLeft: function(event, direction, distance, duration, fingerCount) {
        window.location.href = 'skills.html';
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

    var $typewriter = $('#typewriter');
    var test = ['', 'WHAT', 'HOW', 'WHO', 'ALL', 'TRICKY', 'PRETTY', 'ME'];
    $typewriter.t(test[newIndex], {
      // speed:100,
      caret:false,
      blink_perm:false
    });

    if (newIndex >= 0 && newIndex < 8) {
      lock = true;

      $icon.fadeToggle(500, function() {



        // typewriter(test[newIndex]);

        var docLang = document.documentElement.lang;
        var resourceHelper = (['de', 'ru'].includes(docLang)) ? '../' : '';
        var resource = resourceHelper + 'assets/img/service-icons/service_' + newIndex + '.svg';
        $icon.attr('src', resource);

        $icon.fadeToggle(500, function() {
          lock = false;
        });
      });
      $servicesBlend.fadeOut(500);
      $servicesRoundUp.fadeOut(500);
    } else if (newIndex === 8) {
      $servicesBlend.fadeIn(500);
      $servicesRoundUp.delay(300).fadeIn(500);
    }
  }



});

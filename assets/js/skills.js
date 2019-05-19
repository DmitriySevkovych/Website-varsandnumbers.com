/*
Document ready function
*/
$(function() {
  // Vivus: SVG animation
  var $sm = $(window).width() < 768;
  if ($sm) {
    useVivusOn('svgSkillsSoft', true, function() {
      useVivusOn('svgSkillsMaths', false, function() {
        useVivusOn('svgSkillsBoth', false, function() {});
      });
    });
  } else {
    useVivusOn('svgSkillsAll', false, function() {});
  }

  function useVivusOn(svgId, autostart, callback) {
    var start = autostart ? 'autostart' : 'inViewport';

    new Vivus(svgId, {
        animTimingFunction: Vivus.EASE_OUT,
        start: start,
        forceRender: true
      },
      callback());
  }


  // Data toggle functionality
  $('[data-toggle="popup"]').on('click', function() {
    $popup = $('[data-popup="' + this.id + '"]');
    $popup.fadeIn(400);
    $popup.addClass('popup-open');
  });

  $('.skills-popup').on('click', function() {
    $popup = $('.popup-open');
    $popup.fadeOut(400);
    $popup.removeClass('popup-open');
  });

  $('.mobile-skills-popup').on('click', function() {
    $popup = $('.popup-open');
    $popup.fadeOut(400);
    $popup.removeClass('popup-open');
  });
});

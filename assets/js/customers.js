/*
Document ready function
*/
$(function() {

  $('.customers-focus').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.customers-slider',
    lazyLoad: 'ondemand'
  });

  $('.customers-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.customers-focus',
    centerPadding: '0px',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    lazyLoad: 'ondemand'
  });
});

// slick slider initializer //

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,    
    dots: false,
    infinite: true,
    speed: 5,
    variableWidth: true,
    cssEase: 'ease'
  });
});

  $('#prev').click(function(){
    $(".slider").slick('slickNext');
  });

  $('#next').click(function(){
    $(".slider").slick('slickPrev');
  });

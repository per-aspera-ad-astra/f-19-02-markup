
$('.slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
  variableWidth: true,
  speed: 500,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }
  ]
});


$('.slider1').slick({
  variableWidth: true,
  speed: 750,
  arrows: true
});


$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});

$(document).ready(function(){

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn();
      } else {
          $('.back-to-top').fadeOut();
      }
  });

  //Click event to scroll to top
  $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });

});


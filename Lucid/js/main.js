$(document).ready(function() {
  $('.hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('open');
  });
})

   $(document).ready(function() {

      $('.slider-inner').slick({
        slidesToShow: 1,
       slidesToScroll: 1,
        dots: true,
       arrows : false,
      });
  
  })
//   $(document).ready(function() {
//    $('slider-inner').slick({
//      dots: false,
//      slidesToShow: 1,
//      slidesToScroll: 1,
//      arrows: false
//      responsive: [
//        {
//          breakpoint: 990,
//          settings: {
//            slidesToShow: 1,
//            slidesToScroll: 1,
//            dots: true
//          }
//        },
//        {
//          breakpoint: 760,
//          settings: {
//            slidesToShow: 1,
//            slidesToScroll: 1
//          }
//        },
//        {
//          breakpoint: 360,
//          settings: {
//            slidesToShow: 1,
//            slidesToScroll: 1
//          }
//        }
// //       // You can unslick at a given breakpoint now by adding:
// //       // settings: "unslick"
// //       // instead of a settings object
//      ]
//    });
//  });
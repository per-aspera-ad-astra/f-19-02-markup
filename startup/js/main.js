$(document).ready(function() {
    $('.hamburger').on('click', function(){
      $(this).toggleClass('is-active');
      $('.navigation').toggleClass('open');
    });
  })

    $(document).ready(function() {
      $('.about__slider-inner').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              arrows: true
            }
          },
          {
            breakpoint: 760,
           settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 320,
            settings: {
             slidesToShow: 1,
             slidesToScroll: 1
            }
          }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
        ]
      });
    });

    $(document).ready(function() {
      $('.clients__slider-inner').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 760,
           settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 320,
            settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
            }
          }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
        ]
      });
    });
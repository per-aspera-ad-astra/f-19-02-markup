$(document).ready(function() {
    $('.hamburger').on('click', function(){
      $(this).toggleClass('is-active');
      $('.navigation').toggleClass('open');
    });
    $('.search-open').on('click', function() {
      $('.search-form').toggleClass('open');
    })

    new WOW().init();

    $("#navigation").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1900);
  });

      $('.header-slider-inner').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: false
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
             dots: true
            }
          }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
        ]
      });

      $('.clients-slider-inner').slick({
        dots: false,
        slidesToShow: 1,
        // slidesToScroll: 1,
        arrows: false,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              // slidesToScroll: 1,
              arrows: true,
              dots: true
            }
          },
          {
            breakpoint: 720,
           settings: {
              slidesToShow: 1,
              // slidesToScroll: 1,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 320,
            settings: {
             slidesToShow: 1,
            //  slidesToScroll: 1,
            }
          }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
        ]
      });

      // page init
jQuery(function(){
	initTabs();
});

// content tabs init
function initTabs() {

	jQuery('ul.tabset').contentTabs({
		autoHeight: true,
		animSpeed: 300,
		effect: 'fade',
		tabLinks: 'a'
	});
	// jQuery('ul.slide-tabset').contentTabs({
	// 	addToParent: true,
	// 	animSpeed: 500,
	// 	effect: 'slide',
	// 	tabLinks: 'a'
	// });
	// jQuery('ul.multi-tabset').contentTabs({
	// 	tabLinks: 'a'
	// });
}

    });
    jQuery(function(){
      initTabs();
    });
    
    // content tabs init
    function initTabs() {
    
      jQuery('ul.service-tabset').contentTabs({
        autoHeight: true,
        animSpeed: 300,
        effect: 'fade',
        tabLinks: 'a'
      });
      // jQuery('ul.slide-tabset').contentTabs({
      // 	addToParent: true,
      // 	animSpeed: 500,
      // 	effect: 'slide',
      // 	tabLinks: 'a'
      // });
      // jQuery('ul.multi-tabset').contentTabs({
      // 	tabLinks: 'a'
      // });
    }
    
    

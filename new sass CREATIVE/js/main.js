$(document).ready(function() {

 
  // BURGER

    $('.burger').on('click', function(e) {
      e.preventDefault();
      $('.navigation').slideToggle(500);
    });

     // Sticky header
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });
  
  // TABS
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .not ('[href*="item"]')
    .not ('[href*="service"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    $('.home__slider').slick();

    $('.testimonials__slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1, 
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        }          
      ]
   
    });


    // GALLERY
    var $items = $('.item:gt(5)');
  $('.gallery').click(function() {
    $items.slideToggle(300);
    var $btn = $(this);
    $btn.text($btn.text() == 'View less' ? '+ Load More' : 'View less');
    $grid.isotope('layout');
  });


    // isotope
    var $grid = $('.grid').isotope({
    
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope('layout');
    });

    // page init tab
jQuery(function(){
	initTabs();
});

function initTabs() {
	jQuery('ul.about__item-tabset').contentTabs({
		autoHeight: true,
		animSpeed: 300,
    effect: 'fade',
    tabLinks: 'a'
  
	});
}


// Code for service tabs

// jQuery(function(){
// 	initTabs();
// });


// function initTabs() {
 
//     jQuery('ul.services__item-tabset').contentTabs({
//       autoHeight: true,
//       animSpeed: 300,
//       effect: 'fade',
//       tabLinks: 'a'
    
//     });
//   }

new WOW().init();

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
  } else {
      $('.back-to-top').fadeOut();
  }
});


$(window).on('load', function() {
  var $preloader = $('#page-preloader'),
      $spinner = $preloader.find('.spinner');

  $spinner.fadeOut(2000);
  $preloader.delay(500).fadeOut('slow');
});
//Click event to scroll to top
$('.back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});
});
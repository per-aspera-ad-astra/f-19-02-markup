$(document).ready(function() {
   // Burger menu
  $('.hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.navigation').slideToggle(500);
  })


  // Search
  $('.search-link').click(function(){
     $('.search').fadeToggle();
  });
    
  // Sticky header
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.search').addClass('sticky');
    } else {
      $('.search').removeClass('sticky');
    }
  });

  // About section Tabs
  $('.about__tabs-stage > div').hide();
  $('.about__tabs-stage > div:first').show();

  $('.about__tabs-head a').on('click', function (event) {
    event.preventDefault();
    $('.about__tabs-head a').removeClass('active');
    $(this).addClass('active');

    $('.about__tab-active').removeClass('about__tab-active');
    $(this).parent().addClass('about__tab-active');
    $('.about__tabs-stage > div').hide();
    $($(this).attr('href')).fadeIn('slow');
    
  });
  $('.about__tabs-nav a:first').trigger('click');
 


 // Service section Tabs
 $('.service__tabs-stage > div').hide();
 $('.service__tabs-stage > div:first').show();

 $('.service__tabs-head a').on('click', function (event) {
  event.preventDefault();
  
  $('.service__tab-active').removeClass('service__tab-active');
  $(this).parent().addClass('service__tab-active');
  $('.service__tabs-stage >  div').hide();
  $($(this).attr('href')).fadeIn('slow');
});

$('.service__tabs-head').on('click', function (event) {
  event.preventDefault();
  $('.service__tabs-head').removeClass('active');
  $(this).addClass('active');
});

$('.service__tabs-nav a:first').trigger('click'); 


  // Isotope bug fix
  var $grid = $('.grid').isotope({
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
  });
  
  // Load more button
  $('.load-button').click(function () {
    var $btn = $(this);

    if ($btn.text() == 'Load more') {
      $('.item_more').addClass('item_less');
      $('.item_more').removeClass('item_more');
      $('.icon-plus').css('display', 'none');
      $('.icon-minus').css('display', 'block');
      $btn.text('Load less');
    } else {
      $('.item_less').addClass('item_more');
      $('.item_less').removeClass('item_less');
      $('.icon-plus').css('display', 'block');
      $('.icon-minus').css('display', 'none');
      $btn.text('Load more');
    }
    $grid.isotope('layout');
  });

// *OPTIONAL* To hide button after click

  // $('.load-button').click(function () {
  //   $('.item_more').removeClass('item_more');
  //   $('.load-button').css('display', 'none');
  //   $grid.isotope('layout');
  // });


// Modal Window
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Redirect

var timer;
$('#myBtn').click(function() {
  timer = setTimeout(function () { location.href='http://google.com'; }, 9000);
  $(this).unbind();
});

$('#myBtn2').click(function() {
  timer = setTimeout(function () { location.href='http://google.com'; }, 9000);
  $(this).unbind();
});


$('#cancel').click(function() {
  clearTimeout(timer);
  $(this).unbind();
});






  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not ('[href^="#about__"]')
  .not('[href^="#service__"]')
  .not('[href="#search"]')
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

  // Slider
  $(".testimonials__slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 800,
    lazyLoad: 'ondemand',
    responsive: [{
      breakpoint: 992,
      settings: {
          arrows: false,
      }
  }],
    autoplaySpeed: 1500,
        customPaging : function(slider, i) {
          return `<a href="#arrow"><img  width="60" height="60" class="img-dot" src="img/portrait-${i + 1}.png" alt="portrait"></a>`;
         }
});

  $(".home__slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 800,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        }],
  });
   

});
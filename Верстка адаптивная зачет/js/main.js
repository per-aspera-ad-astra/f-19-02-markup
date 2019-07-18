$(document).ready(function() {
    $('.hamburger').on('click', function(){
      $(this).toggleClass('is-active');
      $('.menu').toggleClass('open');
    })
  })

  $(document).ready(function() {

    $('.slider-inner').slick({
      dots: true
    });
  
  });

  $(document).ready(function(){
    $("#phone").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

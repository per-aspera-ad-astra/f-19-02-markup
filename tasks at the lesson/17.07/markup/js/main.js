$(document).ready(function() {

  var $items = $('.gallery-item:gt(2)');
  $items.hide();
  $('.btn-gallery').click(function() {
    $items.slideToggle(500);
    var $btn = $(this);
    $btn.text($btn.text() == 'View all' ? 'View less' : 'View all');
  });

  // menu-hamburger 
  $('.burger-btn').on ('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('active');
  });

})

new WOW ().init({
  mobile: false
});

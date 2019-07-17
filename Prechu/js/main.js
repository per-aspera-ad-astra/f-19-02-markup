$(document).ready(function() {
  $('.hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('open');
  })
  // Get the modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
})

$('.slider').slick({
  slidesToScroll: 1,
  speed: 800,  
});


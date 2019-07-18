$(document).ready(function() {
    $('.slider .container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        fade: true,
        arrows: true,
        cssEase: "linear"
    });
});

$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.menu').toggleClass('open');
    })
})

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
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
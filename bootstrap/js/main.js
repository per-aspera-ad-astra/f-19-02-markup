$(document).ready(function() {

    // Menu
    $('.burger-btn').on('click', function() {
        $(this).toggleClass('open');
        $('.menu').toggleClass('active');
    });
    $('.menu-link').on('click', function() {
        $(this).toggleClass('open');
        $('.menu').toggleClass('active');
    });

    $('.carousel').carousel({
        interval: 0,
    })


})
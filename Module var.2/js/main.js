$(document).ready(function() {

  $('.slider-inner1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    customPaging : function(slider, i) {
     var dots = ['ГЕОТЕКСТИЛЬ', 'ДОРНИТ', 'УТЕПЛИТЕЛЬ', 'МНОГОСЛОЙНЫЕ МАТЕРИАЛЫ', 'РУБЛЕННЫЙ ГЕОТЕКСТИЛЬ', 'ГЕОРЕШЕТКА', 'ГЕОСЕТКА', 'БЕНТОНИТОВЫЕ МАТЫ', 'ВЫПОЛНЕНИЕ СРОЧНЫХ ЗАКАЗОВ', 'ПОЛНЫЙ ПАКЕТ ДОКУМЕНТОВ', 'ДОСТАВКА АВТОМОБИЛЬНЫМ И ЖЕЛЕЗНОДОРОЖНЫМ ТРАНСПОРТОМ ПО РОССИИИ И СНГ'];
     return '<button type="button" data-role="none">' + dots[i] + '</button>';
    }
  });

  $('.slider-inner2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false
  });
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
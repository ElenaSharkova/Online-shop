$(function () {
   $('.header__btn').on('click', function () {
       $('.rightside-menu').removeClass('rightside-menu--close');
   });
    
   $('.rightside-menu__close').on('click', function () {
       $('.rightside-menu').addClass('rightside-menu--close');
   });
    
    $('.top__slider').slick({
        dots: true, //врубили дотсы
        arrows: false, // вырубили стрелочки
        fade: true, // чтобы менялось плавно
        autoplay: true
        
    });
    $('.contact-slider').slick({
        slidesToShow: 10, //показывает сразу 10 картинок
        slidesToScroll: 10, // перемотка при нажатии по 10 штук
        dots: true, //врубили дотсы
        arrows: false, // вырубили стрелочки
        
    });
    
    var mixer = mixitup('.gallery__inner', {
       load: {
         filter: '.category-living'
        }                 
    });
       
   })

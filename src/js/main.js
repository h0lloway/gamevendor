document.addEventListener('DOMContentLoaded', () => {

  // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper 

  const headerSwiper = new Swiper('.header__swiper', {
    slidesPerGroup: 1,
    slidesPerView: "auto",
    speed: 1300,
    spaceBetween: 10,


    navigation: {
      nextEl: '.header__swiper-button-next',
      prevEl: '.header__swiper-button-prev',
    },
  });



  // select   // select   // select   // select   // select   // select   // select   // select   // select   // select   // select   // select   // select   // select   // select 

  const multiDefault = () => {
    const elements = document.querySelectorAll('.multi-default');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,

      });
    });
  }

  multiDefault();

  // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion 

  $(document).ready(function () {
    $('.accordion__wrap').click(function (event) {
      if ($('.accordion__list').hasClass('one')) {
        $('.accordion__wrap').not($(this)).removeClass('active');
        $('.accordion__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    });
  });
});
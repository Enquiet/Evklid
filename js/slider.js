new Swiper('.slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  wrapperClass: 'slider__list',
  slideClass: 'slider__item',
  pagination: {
      el: '.slider__pagination',
      type: 'bullets',
      bulletClass: 'paginator__item',
      bulletActiveClass: 'paginator__item--active',
      clickable: true
  },
  navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
  },
});

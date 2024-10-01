new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30 
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 50
        }
    }
});
  
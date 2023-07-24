//------------------ メインビジュアルのswiperここから----------------
var mySwiper = new Swiper ('.mv-swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
  },

  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

//------------------ メインビジュアルのswiperここまで----------------
//------------------ worksのswiperここから----------------
var worksSlider = new Swiper('.worksSlider', {
  loop: true,
  loopAdditionalSlides: 1,
  // autoplay: {
  //   delay: 7000,
  //   waitForTransition: false,
	// 	disableOnInteraction: false
  // },
  slidesPerView: 1.2,
  spaceBetween: 8,
  speed: 800,
  effect: 'slide',
  fadeEffect: {
    crossFade: true
  },
		navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {//break
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    1300: {
      slidesPerView: 3.5,
      spaceBetween: 32,
    }
  }
});


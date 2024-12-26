



import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const next = document.querySelector(".next-slide");
const prev = document.querySelector(".prev-slide");
const arrowNext = document.querySelector(".arrow-narrow-next");
const arrowPrev = document.querySelector(".arrow-narrow-prev");

const swiper = new Swiper('.mySwiper', {
  // Parameters
  direction: 'horizontal',
  loop: false,
  modules: [Navigation],
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.wiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 16,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
//   breakpointsBase: "container",
  breakpoints: {
    // 375: {
    //     spaceBetween: 375,
    //    allowTouchMove: true,
    //  },
    768: {
       spaceBetween: 768,
      allowTouchMove: true,
    },
    1440: {
            spaceBetween: 1440,
            allowTouchMove: true,
    },
  },
  centeredSlides: true,
  on: {
            reachEnd() {
              next.disabled = true;
              next.classList.remove("active")
              arrowNext.classList.remove("active-arrow")
              prev.classList.add("active");
              arrowPrev.classList.add("active-arrow");
            },
            reachBeginning() {
              prev.disabled = true;
              prev.classList.remove("active")
              arrowPrev.classList.remove("active-arrow")
              next.classList.add("active");
              arrowNext.classList.add("active-arrow")
            },
            fromEdge() {
              next.disabled = false;
              next.classList.add("active");
              arrowNext.classList.add("active-arrow")
              prev.disabled = false;
              prev.classList.add("active");
              arrowPrev.classList.add("active-arrow")
            },
        },
});

next.classList.add("active");
arrowNext.classList.add("active-arrow")

next.addEventListener('click', () => {
  swiper.slideNext();
});

prev.addEventListener('click', () => {
  swiper.slidePrev();
});



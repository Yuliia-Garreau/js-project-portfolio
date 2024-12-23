



import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


// const nextBtn = document.querySelector(".swiper-button-next");
// const prevBtn = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".next-slide");
const prev = document.querySelector(".prev-slide");
const arrowNext = document.querySelector(".arrow-narrow-next");
const arrowPrev = document.querySelector(".arrow-narrow-prev");


//     // // spaceBetween: 10,
//     // keyboard: {
//     //     enabled: true,
//     //     onlyInViewport: true,
//     //   },
//     // //   breakpoints: {
//     // //     1440: {
//     // //       slidesPerView: 1,
//     // //     //   spaceBetween: 32,
//     // //     },
//     // //   },
//     //   
// });

const swiper = new Swiper('.mySwiper', {
  // Parameters
  direction: 'horizontal',
  loop: false,
  modules: [Navigation],
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 32,
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



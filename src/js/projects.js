
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const nextBtn = document.querySelector(".swiper-button-next");
const prevBtn = document.querySelector(".swiper-button-prev");

// init Swiper:
// const swiper = new Swiper('.swiper', {

//   modules: [Navigation],
//   direction: 'horizontal',
//     // // loop: false,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     // slidesPerView: 1,
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
//     //   on: {
//     //     reachEnd() {
//     //       nextBtn.disabled = true;
//     //     },
//     //     reachBeginning() {
//     //       prevBtn.disabled = true;
//     //     },
//     //     fromEdge() {
//     //       nextBtn.disabled = false;
//     //       prevBtn.disabled = false;
//     //     },
//     // },
// });

const swiper = new Swiper('.swiper', {
  // Parameters
  direction: 'horizontal',
  loop: false,
  modules: [Navigation],
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

nextBtn.addEventListener('click', () => {
  swiper.slideNext();
  console.log("next");
  
});

prevBtn.addEventListener('click', () => {
  swiper.slidePrev();
});


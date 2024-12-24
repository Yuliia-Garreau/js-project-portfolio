import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const container = document.querySelector('.reviews-wrapper');
const prevButton = document.querySelector('.reviews-swiper-button-prev');
const nextButton = document.querySelector('.reviews-swiper-button-next');
const swiperContainer = document.querySelector('.reviews-swiper');
const prevArrow = document.querySelector('.reviews-arrow-prev');
const nextArrow = document.querySelector('.reviews-arrow-next');

const API_URL = 'https://portfolio-js.b.goit.study/api/reviews';

async function fetchReviews() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    renderReviews(data);

    const slides = document.querySelectorAll('.reviews-item');

    if (slides.length > 0) {
      setTimeout(() => {
        initializeSwiper();
      }, 100);
    }
  } catch (error) {
    console.log(error.message);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch reviews',
      position: 'topRight',
      color: '#e74c3c',
    });
  }
}

function renderReviews(reviews) {
  if (!reviews || reviews.length === 0) {
    container.innerHTML = '<li class="not-found">Not found</li>';
    return;
  }
  container.innerHTML = '';

  reviews.map(review => {
    const reviewHTML = `
        <li class='reviews-item swiper-slide'>
        <img class='reviews-img'src='${review.avatar_url}' alt ='${review.author}' width='48px' height='48px'>
        <h3 class='reviews-name'>${review.author}</h3>
        <p class='reviews-text'>${review.review}</p>
        </li>
        `;
    container.insertAdjacentHTML('beforeend', reviewHTML);
  });
}

function initializeSwiper() {
  // if (!swiperContainer || !nextButton || !prevButton) {
  //   console.error('Swiper elements are not available');
  //   return;
  // }

  const swiper = new Swiper('.reviews-my-swiper', {
    direction: 'horizontal',
    loop: false,
    modules: [Navigation],
    slidesPerView: 1,
    slidesPerGroup: 1,
    allowTouchMove: true,
    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 16,
        allowTouchMove: true,
      },
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
    },
    on: {
      reachEnd() {
        nextButton.disabled = true;
        nextButton.classList.remove('active');
        nextArrow.classList.remove('active-arr');
        prevButton.classList.add('active');
        prevArrow.classList.add('active-arr');
      },
      reachBeginning() {
        prevButton.disabled = true;
        prevButton.classList.remove('active');
        prevArrow.classList.remove('active-arr');
        nextButton.classList.add('active');
        nextArrow.classList.add('active-arr');
      },
      fromEdge() {
        nextButton.disabled = false;
        nextButton.classList.add('active');
        nextArrow.classList.add('active-arr');
        prevButton.disabled = false;
        prevButton.classList.add('active');
        prevArrow.classList.add('active-arr');
      },
    },
  });

  // nextButton.classList.add('active');
  // nextArroe.classList.add('active-arr');
  prevButton.disabled = true;

  nextButton.addEventListener('click', () => {
    swiper.slideNext();
  });

  prevButton.addEventListener('click', () => {
    swiper.slidePrev();
  });
  // swiper.update();
}

document.addEventListener('DOMContentLoaded', () => {
  fetchReviews();
});

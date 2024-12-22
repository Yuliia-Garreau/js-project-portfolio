import Swiper from 'swiper';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const container = document.querySelector('.reviews .reviews-wrapper');
const prevButton = document.querySelector('.reviews .swiper-button-prev');
const nextButton = document.querySelector('.reviews .swiper-button-next');
const swiperContainer = document.querySelector('.reviews .reviews-swiper');
const API_URL = 'https://portfolio-js.b.goit.study/api/reviews';

async function fetchReviews() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    renderReviews(data);

    const slides = document.querySelectorAll('.swiper-slide');

    // if (slides.length > 0) {
    //   setTimeout(() => {
    //     initializeSwiper();
    //   }, 100);
    // }
  } catch (error) {
    console.log(error.message);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch reviews',
    });
  }
}

function renderReviews(reviews) {
  if (!reviews || reviews.length === 0) {
    container.innerHTML = '<li class="not-found">Not found</li>';
    return;
  }
  container.innerHTML = '';

  reviews.forEach(review => {
    const reviewHTML = `
        <li class='swiper-slide'>
        <img class='reviews-img'src='${review.avatar_url}' alt ='${review.author}' width='48px' height='48px'>
        <h3 class='reviews-name'>${review.author}</h3>
        <p class='reviews-text'>${review.review}</p>
        </li>
        `;
    container.insertAdjacentHTML('beforeend', reviewHTML);
  });
}

function initializeSwiper() {
  if (!swiperContainer || !nextButton || !prevButton) {
    console.error('Swiper elements are not available');
    return;
  }

  const swiper = new Swiper(swiperContainer, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
        allowTouchMove: true,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    on: {
      reachEnd: () => toggleButtonState('next', true),
      reachBeginning: () => toggleButtonState('prev', true),
      fromEdge: () => toggleButtonState('both', false),
    },
  });

  swiper.update();
}

function toggleButtonState(button, isDisabled) {
  if (button === 'prev' || button === 'both') {
    prevButton.disabled = isDisabled;
    prevButton.classList.toggle('disabled', isDisabled);
  }

  if (button === 'next' || button === 'both') {
    nextButton.disabled = isDisabled;
    nextButton.classList.toggle('disabled', isDisabled);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  fetchReviews();
});

import Swiper from 'swiper';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const container = document.querySelector('.reviews-wrapper');
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
const swiperContainer = document.querySelector('.reviews-swiper');
const API_URL = 'https://portfolio-js.b.goit.study/api/reviews';

async function fetchReviews() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    renderReviews(data);
    initializeSwiper();
  } catch (error) {
    console.log(error.message);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch reviews',
    });
    showError();
  }
}

function renderReviews(reviews) {
  container.innerHTML = '';

  reviews.forEach(review => {
    const reviewHTML = `
        <li class='reviews-item'>
        <img class='reviews-img'src='${review.avatar_url}' alt ='${review.author}' width='48px' height='48px'>
        <h3 class='reviews-name'>${review.author}</h3>
        <p class='reviews-text'>${review.review}</p>
        </li>
        `;
    container.insertAdjacentHTML('beforeend', reviewHTML);
  });
}

function showError() {
  container.innerHTML = '<li class="not-found">Not found</li>';
}

function initializeSwiper() {
  const swiper = new Swiper('.reviews-swiper', {
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
  fetchReviews(); // Викликати після завантаження DOM
});

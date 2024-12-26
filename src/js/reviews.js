import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_URL = 'https://portfolio-js.b.goit.study/api/reviews';
const reviewsList = document.querySelector('.reviews-list');

async function fetchReviews() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    renderReviews(data);
    initializeSwiper();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch reviews',
    });
  }
}

function renderReviews(reviews) {
  const reviewsHtml = reviews
    .map(
      review => `
        <li class="review-item swiper-slide" id="${review._id}">
          <div class="review-author">
            <img src="${review.avatar_url}" alt="Avatar of ${review.author}" class="review-avatar"/>
            <h2 class="review-author-name">${review.author}</h2>
          </div>
          <p class="review-text">${review.review}</p>
        </li>
      `
    )
    .join('');
  reviewsList.innerHTML = reviewsHtml;
}

function updateNavigationButtons(swiper) {
  const nextButton = document.querySelector('.reviews-swiper-button-next');
  const prevButton = document.querySelector('.reviews-swiper-button-prev');

  if (swiper.isEnd) {
    nextButton.classList.remove('active');
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
    nextButton.classList.add('active');
  }

  if (swiper.isBeginning) {
    prevButton.classList.remove('active');
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
    prevButton.classList.add('active');
  }
}

function initializeSwiper() {
  const swiper = new Swiper('.swiper', {
    // modules: [Navigation, Pagination],
    loop: false,
    slidesPerView: 1,
    loopedSlides: 6,
    slidesPerGroup: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
      375: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
    },
    on: {
      slideChange: function () {
        updateNavigationButtons(swiper);
      },
    },
  });

  updateNavigationButtons(swiper);
}

document.addEventListener('DOMContentLoaded', fetchReviews);

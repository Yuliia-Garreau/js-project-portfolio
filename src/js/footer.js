const inputs = document.querySelectorAll('.footer-input');
const form = document.querySelector('.footer-form');
const btn = document.querySelector('.footer-btn-send');
const modal = document.querySelector('.footer-modal');
const btnClose = document.querySelector('.footer-close');
const backdrop = document.querySelector('.footer-back-modal');
const emailInput = form.querySelector('input[type="email"]');
const commentInput = form.querySelector('input[type="text"]');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const widthInput = Math.floor(input.offsetWidth / 9);
    const inpText = input.value;

    if (inpText.length > widthInput) {
      input.value = inpText.slice(0, widthInput - 3) + '...';
    }

    input.title = inpText;
  });
});

btnClose.addEventListener('click', modalClose);

function modalOpen() {
  backdrop.style.display = 'block';
  backdrop.classList.add('is-open');
}

function modalClose() {
  backdrop.style.display = 'none';
  backdrop.classList.remove('is-open');
}

backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) {
    modalClose();
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();

  const data = {
    email,
    comment,
  };

  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api-docs/#/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Unknown error occurred');
    }

    modalOpen();
    form.reset();
  } catch (error) {
    showError(error.message);
  }
});

function showError(message) {
  console.error(message);
}

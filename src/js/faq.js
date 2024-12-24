import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container');

// const accItems = document.querySelectorAll('.faq-item');

// accItems.forEach(item => {
//     item.addEventListener('click', () => {
//         // Знаходимо елементи SVG для кожного аккордеону
//         const accSvgDown = item.querySelector('.faq-icon-down');
//         const accSvgUp = item.querySelector('.faq-icon-upp');

//         // Перемикаємо іконки для всіх елементів FAQ
//         document.querySelectorAll('.faq-icon-down').forEach(icon => icon.classList.remove('visually-hidden'));
//         document.querySelectorAll('.faq-icon-upp').forEach(icon => icon.classList.add('visually-hidden'));

//         // Перемикаємо видимість для поточного елемента
//         if (accSvgDown && accSvgUp) {
//             accSvgDown.classList.toggle('visually-hidden');
//             accSvgUp.classList.toggle('visually-hidden');
//         }

//     });
// });

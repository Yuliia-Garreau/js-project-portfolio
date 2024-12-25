import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accItems = document.querySelectorAll('.faq-item');

accItems.forEach(item => {
    item.addEventListener('click', () => {
        
        const accSvgDown = item.querySelector('.faq-icon-down');
        const accSvgUp = item.querySelector('.faq-icon-upp');
        const accContent = item.querySelector('.faq-accordion-content');

        accItems.forEach(itemEl => {
            if (itemEl !== item) {
                const accContentEl = itemEl.querySelector('.faq-accordion-content');
                const accSvgDownEl = itemEl.querySelector('.faq-icon-down');
                const accSvgUpEl = itemEl.querySelector('.faq-icon-upp');

                if (accContentEl) {
                    accContentEl.classList.add('visually-hidden');
                }

                if (accSvgDownEl && accSvgUpEl) {
                    accSvgDownEl.classList.remove('visually-hidden');
                    accSvgUpEl.classList.add('visually-hidden');
                }
            }
        });

        if (accContent) {
            accContent.classList.toggle('visually-hidden');
        }

        if (accSvgDown && accSvgUp) {
            if (accContent && !accContent.classList.contains('visually-hidden')) {
                accSvgDown.classList.add('visually-hidden');
                accSvgUp.classList.remove('visually-hidden');
            } else {
                accSvgDown.classList.remove('visually-hidden');
                accSvgUp.classList.add('visually-hidden');
            }
        }
    });
});

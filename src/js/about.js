import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item, index) => {
    const content = item.nextElementSibling;

    if (index === 0) {
    item.classList.add('open');
    if (content) {
        content.style.display = 'block';
    }
    } else {
    item.classList.remove('open');
    if (content) {
        content.style.display = 'none';
    }
    }
});

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        accordionItems.forEach(el => {
            if (el !== item) {
                el.classList.remove('open');
                const content = el.nextElementSibling;
                if (content) content.style.display = 'none';
            }
        });

item.classList.toggle('open');
    const content = item.nextElementSibling;
    if (content) {
        content.style.display = item.classList.contains('open') ? 'block' : 'none';
    }
    });
});

const firstItem = document.querySelector('.accordion-item.open');
if (firstItem) {
    const firstContent = firstItem.nextElementSibling;
    if (firstContent) firstContent.style.display = 'block';
}


/* ========================================================================================================================================================
Swiper
======================================================================================================================================================== */


document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
    const button = document.querySelector(".arrow-button");
    let currentIndex = 0;

    function updateActiveSkill() {
    skills.forEach((skill, index) => {
        skill.classList.toggle("active", index === currentIndex);
    });
    }

    button.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % skills.length;
    updateActiveSkill();
    });

    document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % skills.length;
        updateActiveSkill();
    } else if (event.key === "Tab") {
        event.preventDefault();
        currentIndex = (currentIndex + 1) % skills.length;
        updateActiveSkill();
    }
    });

    let startX = 0;
    document.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
    });

    document.addEventListener("touchend", (event) => {
    const endX = event.changedTouches[0].clientX;
    if (startX < endX - 50) {
        currentIndex = (currentIndex + 1) % skills.length;
        updateActiveSkill();
    }
    });

    updateActiveSkill();
});





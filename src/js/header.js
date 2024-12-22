const menuLink = document.querySelector('.header-menu__link');
const menuList = document.querySelector('.header-menu__list');

menuLink.addEventListener('click', event => {
  event.stopPropagation();
  menuList.classList.toggle('show');
});

document.addEventListener('click', function (event) {
  if (
    !event.target.classList.contains('header-menu__link') &&
    !event.target.closest('.header-menu__list')
  ) {
    menuList.classList.remove('show');
  }
});

// header append hero

const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

hero.insertBefore(header, hero.firstChild);

// header mobile menu

document.querySelector('.header-burger').addEventListener('click', () => {
  document.querySelector('.header-burger').classList.toggle('active');
  document.querySelector('.header-menu').classList.toggle('show');
});

// header modal

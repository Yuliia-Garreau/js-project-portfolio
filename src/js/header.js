const menuLink = document.querySelector('.header-menu__link');
const menuList = document.querySelector('.header-menu ul');

menuLink.addEventListener('click', () => {
  menuList.classList.toggle('show');
});

document.addEventListener('click', function (event) {
  if (
    !event.target.classList.contains('header-menu__link') &&
    !event.target.closest('.header-menu ul')
  ) {
    menuList.classList.remove('show');
  }
});

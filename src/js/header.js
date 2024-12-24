document.addEventListener('DOMContentLoaded', () => {
  const menuLink = document.querySelector('.header-menu__link');
  const menuList = document.querySelector('.header-menu__list');
  const headerBurger = document.querySelector('.header-burger');
  const menuItems = document.querySelectorAll('.header-menu__item a');
  const headerMenu = document.querySelector('.header-menu');

  // Toggle menu on menu link click
  menuLink?.addEventListener('click', event => {
    event.stopPropagation();
    menuList.classList.toggle('show');
  });

  // Close menu if clicked outside
  document.addEventListener('click', function (event) {
    if (
      !event.target.classList.contains('header-menu__link') &&
      !event.target.closest('.header-menu__list')
    ) {
      menuList.classList.remove('show');
    }
  });

  // Append header to hero
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  hero.insertBefore(header, hero.firstChild);

  // Toggle mobile menu
  headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('show');
  });

  // Hide menu on link click
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      headerMenu.classList.remove('show');
      headerBurger.classList.remove('active');
    });
  });

  // Create and append the mobile order button
  const buttonModal = document.createElement('a');
  buttonModal.classList.add('header-button__mobile');
  buttonModal.href = '#footer';
  buttonModal.textContent = 'Order the project';
  headerMenu.appendChild(buttonModal);

  // Hide menu on buttonModal click
  buttonModal.addEventListener('click', () => {
    menuList.classList.remove('show');
    headerBurger.classList.remove('active');
    headerMenu.classList.remove('show');
  });
});

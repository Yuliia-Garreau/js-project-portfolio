// ---------------

const themes = {
  pink: {
    '--pink-color': '#ed3b44',
    '--pink-color-hover': '#e0373f',
    '--background-hero-mobile': 'url(../img/Others/Other_mob/Hero_mob.png)',
    '--background-hero-mobile-2x':
      'url(../img/Others/Other_mob/Hero@2x_mob.png)',
    '--background-hero-tablet': 'url(../img/Others/Other_tab/Hero_tab.png)',
    '--background-hero-tablet-2x':
      'url(../img/Others/Other_tab/Hero@2x_tab.png)',
    '--background-hero-desktop': 'url(../img/Others/Other_desk/Hero.png)',
    '--background-hero-desktop-2x': 'url(../img/Others/Other_desk/Hero@2x.png)',
    '--background-header-modal': 'url(../img/Header/header_modal_mob-min.png)',
    '--background-header-modal-2x':
      'url(../img/Header/header_modal_mob@2x-min.png)',
  },
  green: {
    '--pink-color': '#c6e327',
    '--pink-color-hover': '#8A9B24',
    '--background-hero-mobile':
      'url(../img/Others/background_green/Hero_green.png)',
    '--background-hero-mobile-2x':
      'url(../img/Others/background_green/Hero_green@2x.png)',
    '--background-hero-tablet':
      'url(../img/Others/background_green/Hero_green.png)',
    '--background-hero-tablet-2x':
      'url(../img/Others/background_green/Hero_green@2x.png)',
    '--background-hero-desktop':
      'url(../img/Others/background_green/Hero_green.png)',
    '--background-hero-desktop-2x':
      'url(../img/Others/background_green/Hero_green@2x.png)',
    '--background-header-modal':
      'url(../img/Others/background_green/Hero_green.png)',
    '--background-header-modal-2x':
      'url(../img/Others/background_green/Hero_green@2x.png)',
  },
  blue: {
    '--pink-color': '#0041e8',
    '--pink-color-hover': '#012EA1',
    '--background-hero-mobile':
      'url(../img/Others/background_blue/Hero_blue.png)',
    '--background-hero-mobile-2x':
      'url(../img/Others/background_blue/Hero_blue@2x.png)',
    '--background-hero-tablet':
      'url(../img/Others/background_blue/Hero_blue.png)',
    '--background-hero-tablet-2x':
      'url(../img/Others/background_blue/Hero_blue@2x.png)',
    '--background-hero-desktop':
      'url(../img/Others/background_blue/Hero_blue.png)',
    '--background-hero-desktop-2x':
      'url(../img/Others/background_blue/Hero_blue@2x.png)',
    '--background-header-modal':
      'url(../img/Others/background_blue/Hero_blue.png)',
    '--background-header-modal-2x':
      'url(../img/Others/background_blue/Hero_blue@2x.png)',
  },
  // orange: {
  //   '--pink-color': '#FF7F08',
  //   '--pink-color-hover': '#D66C04',
  //   '--background-hero-mobile':
  //     'url(../img/Others/background_orange/Hero_orange.png)',
  //   '--background-hero-mobile-2x':
  //     'url(../img/Others/background_orange/Hero_orange@2x.png)',
  //   '--background-hero-tablet':
  //     'url(../img/Others/background_orange/Hero_orange.png)',
  //   '--background-hero-tablet-2x': 'url()',
  //   '--background-hero-desktop': 'url()',
  //   '--background-hero-desktop-2x': 'url()',
  //   '--background-header-modal': 'url()',
  //   '--background-header-modal-2x': 'url()',
  // },
};
const themeSwitcher = document.getElementById('theme-switcher');
const applyTheme = theme => {
  const root = document.documentElement;
  const selectedTheme = themes[theme];
  if (selectedTheme) {
    Object.keys(selectedTheme).forEach(key => {
      root.style.setProperty(key, selectedTheme[key]);
    });
  }
};
// Застосувати тему pink при першому завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  applyTheme('pink');
});
themeSwitcher.addEventListener('change', () => {
  applyTheme(themeSwitcher.value);
});

// -----------------------custom-select--
// const customSelect = document.querySelector('.custom-select');
// const applyTheme = theme => {
//   const root = document.documentElement;
//   const selectedTheme = themes[theme];
//   if (selectedTheme) {
//     Object.keys(selectedTheme).forEach(key => {
//       root.style.setProperty(key, selectedTheme[key]);
//     });
//   }
// };

// document.addEventListener('DOMContentLoaded', () => {
//   applyTheme('pink');
// });

// customSelect.addEventListener('click', () => {
//   const optionsContainer = customSelect.querySelector('.options-container');
//   const optionsList = optionsContainer.querySelectorAll('.option');

//   optionsList.forEach(option => {
//     option.addEventListener('click', () => {
//       const value = option.getAttribute('data-value');
//       const selectedOption = customSelect.querySelector('.selected');
//       selectedOption.innerText = option.innerText;
//       selectedOption.setAttribute('data-value', value);
//       applyTheme(value);
//     });
//   });
// });

// ---

// document.addEventListener('DOMContentLoaded', function () {
//   const customSelect = document.querySelector('.custom-select');
//   const optionsContainer = document.querySelector('.options-container');
//   const selectedOption = document.querySelector('.selected');
//   const optionsList = document.querySelectorAll('.option');

//   customSelect.addEventListener('click', function (event) {
//     customSelect.classList.toggle('open');
//     event.stopPropagation();
//   });

//   optionsList.forEach(option => {
//     option.addEventListener('click', function () {
//       selectedOption.innerText = this.innerText;
//       customSelect.classList.remove('open');
//     });

//     option.addEventListener('mouseover', function () {
//       this.style.backgroundColor = 'var(--pink-color-hover)';
//     });

//     option.addEventListener('mouseout', function () {
//       this.style.backgroundColor = '';
//     });
//   });

//   document.addEventListener('click', function (e) {
//     if (!customSelect.contains(e.target)) {
//       customSelect.classList.remove('open');
//     }
//   });
// });
//

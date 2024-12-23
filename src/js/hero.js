// const themeSwitcher = document.getElementById('theme-switcher');

// themeSwitcher.addEventListener('change', () => {
//   const root = document.documentElement;
//   switch (themeSwitcher.value) {
//     case 'pink':
//       root.style.setProperty('--pink-color', '#ed3b44');
//       root.style.setProperty('--pink-color-hover', '#e0373f');
//       root.style.setProperty(
//         '--background-hero-mobile',
//         'url(../img/Others/Other_mob/Hero_mob.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-mobile-2x',
//         'url(../img/Others/Other_mob/Hero@2x_mob.png)'
//       );

//       root.style.setProperty(
//         '--background-hero-tablet',
//         'url(../img/Others/Other_tab/Hero_tab.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-tablet-2x',
//         'url(../img/Others/Other_tab/Hero@2x_tab.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-desktop',
//         'url(../img/Others/Other_desk/Hero.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-desktop-2x',
//         'url(../img/Others/Other_desk/Hero@2x.png)'
//       );
//       break;
//     case 'green':
//       root.style.setProperty('--pink-color', '#c6e327');
//       root.style.setProperty('--pink-color-hover', '#8A9B24');

//       root.style.setProperty(
//         '--background-hero-mobile',
//         'url(../img/Others/test_background_green/background_green_mob-min.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-mobile-2x',
//         'url(../img/Others/test_background_green/background_green_mob-min.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-tablet',
//         'url(../img/Others/test_background_green/background_green_tab-min.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-tablet-2x',
//         'url(../img/Others/test_background_green/background_green_tab-min.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-desktop',
//         'url(../img/Others/test_background_green/background_green_desk-min.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-desktop-2x',
//         'url(../img/Others/test_background_green/background_green_desk-min.png)'
//       );
//       break;
//     case 'blue':
//       root.style.setProperty(
//         '--background-hero-mobile',
//         'url(../img/Others/test_background_blue/Hero_blue.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-mobile-2x',
//         'url(../img/Others/test_background_blue/Hero_blue@2x.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-tablet',
//         'url(../img/Others/test_background_blue/Hero_blue@2x.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-tablet-2x',
//         'url(../img/Others/test_background_blue/Hero_blue@2x.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-desktop',
//         'url(../img/Others/test_background_blue/Hero_blue@2x.png)'
//       );
//       root.style.setProperty(
//         '--background-hero-desktop-2x',
//         'url(../img/Others/test_background_blue/Hero_blue@2x.png)'
//       );
//       root.style.setProperty('--pink-color', '#0041e8');
//       root.style.setProperty('--pink-color-hover', '#012EA1');
//       break;
//   }
// });

//

const themeSwitcher = document.getElementById('theme-switcher');

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
  },
  green: {
    '--pink-color': '#c6e327',
    '--pink-color-hover': '#8A9B24',
    '--background-hero-mobile':
      'url(../img/Others/test_background_green/background_green_mob-min.png)',
    '--background-hero-mobile-2x':
      'url(../img/Others/test_background_green/background_green_mob-min.png)',
    '--background-hero-tablet':
      'url(../img/Others/test_background_green/background_green_tab-min.png)',
    '--background-hero-tablet-2x':
      'url(../img/Others/test_background_green/background_green_tab-min.png)',
    '--background-hero-desktop':
      'url(../img/Others/test_background_green/background_green_desk-min.png)',
    '--background-hero-desktop-2x':
      'url(../img/Others/test_background_green/background_green_desk-min.png)',
  },
  blue: {
    '--pink-color': '#0041e8',
    '--pink-color-hover': '#012EA1',
    '--background-hero-mobile':
      'url(../img/Others/test_background_blue/Hero_blue.png)',
    '--background-hero-mobile-2x':
      'url(../img/Others/test_background_blue/Hero_blue@2x.png)',
    '--background-hero-tablet':
      'url(../img/Others/test_background_blue/Hero_blue@2x.png)',
    '--background-hero-tablet-2x':
      'url(../img/Others/test_background_blue/Hero_blue@2x.png)',
    '--background-hero-desktop':
      'url(../img/Others/test_background_blue/Hero_blue@2x.png)',
    '--background-hero-desktop-2x':
      'url(../img/Others/test_background_blue/Hero_blue@2x.png)',
  },
};

// themeSwitcher.addEventListener('change', () => {
//   const root = document.documentElement;
//   const selectedTheme = themes[themeSwitcher.value];

//   if (selectedTheme) {
//     Object.keys(selectedTheme).forEach(key => {
//       root.style.setProperty(key, selectedTheme[key]);
//     });
//   }
// });

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

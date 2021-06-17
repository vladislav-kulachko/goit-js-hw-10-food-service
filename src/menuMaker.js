import menuList from './menu.json';
import templateMenuCreator from './templates/template-menu.hbs';

document.querySelector('.js-menu').insertAdjacentHTML('afterbegin', templateMenuCreator(menuList));

// function createMenuCardsMarcup(menuList) {
//   const arrMenu = menuList.map(templateMenuCreator).join('');
//   console.log(arrMenu);
//   return document.querySelector('.js-menu').insertAdjacentHTML('afterbegin', arrMenu);
// }
// createMenuCardsMarcup(menuList);

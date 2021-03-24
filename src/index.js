import menuEl from './menu.json';
import menuTpl from './templates/gallery.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('#theme-switch-toggle'),
  menu: document.querySelector('ul.js-menu'),
};

const cardsMarkup = menuTpl(menuEl);
refs.menu.insertAdjacentHTML('beforeend', cardsMarkup);

refs.switch.addEventListener('change', setClassList);
refs.switch.addEventListener('change', setLocalStorage);

function setClassList(evt) {
  const check = refs.switch.checked;
  if (check) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function setLocalStorage(evt) {
  const check = refs.switch.checked;
  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const localTheme = localStorage.getItem('theme');
if (localTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}

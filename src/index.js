import './style.css';
import loadPage, { loadContent as loadMainTab } from './page-load.js';
import loadMenuTab from './menu.js';
import loadContactTab from './contact.js';
import addBreakfastMenu from './breakfast.js';
import addLunchMenu from './lunch.js';
import addDinnerMenu from './dinner.js';
import addDrinksMenu from './drinks.js';


loadPage();

const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

logo.addEventListener('click', () => {
  removeChildren(content);
  loadMainTab();
});

menu.addEventListener('click', () => {
  removeChildren(content);
  loadMenuTab();
  addBreakfastMenu();
  const breakfast = document.querySelector('.breakfast');
  breakfast.classList.add('active');
  const menuItems = document.querySelector('.menu-items');
  const menuOptions = document.querySelectorAll('.menu-tab li');
  menuOptions.forEach((option) => {
    option.addEventListener('click', e => {
      removeChildren(menuItems);

      if (e.target.classList.contains('breakfast')) {
        addBreakfastMenu();
        toggleActive(e, menuOptions);
      } else if (e.target.classList.contains('lunch')) {
        addLunchMenu();
        toggleActive(e, menuOptions);
      } else if (e.target.classList.contains('dinner')) {
        addDinnerMenu();
        toggleActive(e, menuOptions);
      } else if (e.target.classList.contains('drinks')) {
        addDrinksMenu();
        toggleActive(e, menuOptions);
      }
    })
  })
});

contact.addEventListener('click', () => {
  removeChildren(content);
  loadContactTab();
})

contact.addEventListener('click', () => {
  removeChildren(content);
  loadContactTab();
});


function removeChildren(parent) {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function toggleActive(e, menuOptions) {
  menuOptions.forEach((option) => {
    if (option.classList.contains('active')) {
      option.classList.remove('active');
    }
  });
  if (e.target.classList.contains('breakfast')) {
    e.target.classList.add('active');
  } else if (e.target.classList.contains('lunch')) {
    e.target.classList.add('active');
  } else if (e.target.classList.contains('dinner')) {
    e.target.classList.add('active');
  } else if (e.target.classList.contains('drinks')) {
    e.target.classList.add('active');
  }
}



function addMenuTab() {
  const menuTab = document.createElement('ul');
  menuTab.classList.add('menu-tab');

  const breakfast = document.createElement('li');
  breakfast.textContent = "Breakfast";
  breakfast.classList.add('breakfast');
  menuTab.appendChild(breakfast);

  const lunch = document.createElement('li');
  lunch.textContent = "Lunch";
  lunch.classList.add('lunch');
  menuTab.appendChild(lunch);

  const dinner = document.createElement('li');
  dinner.textContent = "Dinner";
  dinner.classList.add('dinner');
  menuTab.appendChild(dinner);

  const drinks = document.createElement('li');
  drinks.textContent = "Drinks";
  drinks.classList.add('drinks');
  menuTab.appendChild(drinks);

  return menuTab;
}

function addImageContainer() {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  return imageContainer;
}

function addMenuContainer() {
  const menu = document.createElement('div');
  menu.classList.add('menu-items');

  return menu;
}

export default function loadMenuTab() {
  const content = document.getElementById('content');
  content.appendChild(addMenuTab());
  content.appendChild(addImageContainer());
  content.appendChild(addMenuContainer());
}

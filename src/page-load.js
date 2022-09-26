import Restaurant from './restaurant.jpg';


function addHeader() {
  
  const header = document.createElement('header');

  const h1Logo = document.createElement('div');
  h1Logo.textContent = "L'Ocale Bistro";
  h1Logo.classList.add('logo');
  header.appendChild(h1Logo);

  const sideContainer = document.createElement('div');
  sideContainer.classList.add('side-container');
  header.appendChild(sideContainer);

  const h1Menu = document.createElement('div');
  h1Menu.textContent = "Menu";
  h1Menu.classList.add('menu');
  sideContainer.appendChild(h1Menu);

  const h1Contact = document.createElement('div');
  h1Contact.textContent = "Contact";
  h1Contact.classList.add('contact');
  sideContainer.appendChild(h1Contact);

  return header;
}

function addImage() {

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const restaurantImage = new Image();
  restaurantImage.src = Restaurant;

  imageContainer.appendChild(restaurantImage);

  return imageContainer;
}

function addMainContent() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');

  const h2Welcome = document.createElement('h2');
  h2Welcome.textContent = 'Welcome to L\'Ocale';

  mainContent.appendChild(h2Welcome);

  const intro = document.createElement('div');
  intro.classList.add('intro');

  const p1 = document.createElement('p');
  p1.textContent = "Welcome to L'Ocale, our stylish bistro where you enjoy a friendly service with a smile, an informal afternoon with friends and family, just as well as a business lunch or dinner after work. Located just a stone's throw from the city centre and it's historic market. The bistro has a fantastic garden in the back that can be enjoyed in the summer and winter";
  intro.appendChild(p1);

  const p2 = document.createElement('p');
  p2.textContent = "The short menu is carefully crafted by Head Chef Joe Pierre, and features a range of classic bistro dishes that showcase the best seasonal produce. It will suit any lifestyle, no matter what you fancy. In fact, if there is something you cannot find on the menu, tell our team who will be more than happy to accomodate to your cravings.";
  intro.appendChild(p2);

  const p3 = document.createElement('p');
  p3.textContent = "We've been serving locals for over 20 years!";
  intro.appendChild(p3);

  mainContent.appendChild(intro);

  return mainContent;
}

export default function loadPage() {
  document.body.appendChild(addHeader());
  const content = document.getElementById('content');
  content.appendChild(addImage());
  content.appendChild(addMainContent());
}

export function loadContent() {
  const content = document.getElementById('content');
  content.appendChild(addImage());
  content.appendChild(addMainContent());
}

function createMenu(items, descriptions) {
  const menu = document.querySelector('.menu-items');
  
  for (let i = 0; i < items.length; i++) {
    const container = document.createElement('div');
    container.classList.add('item');
    const item = document.createElement('div');
    item.textContent = items[i];
    const description = document.createElement('p');
    description.textContent = descriptions[i];
 
    container.appendChild(item);
    container.appendChild(description);
    menu.appendChild(container);
  }

  return menu;
}

function addImage(imageName) {
  const imageContainer = document.querySelector('.image-container');
  imageContainer.textContent = '';
  const image = new Image();
  image.src = imageName;

  imageContainer.appendChild(image);

  return imageContainer;
}

export default function addMenu(imageName, items, descriptions) {
  const content = document.getElementById('content');
  content.appendChild(addImage(imageName));
  content.appendChild(createMenu(items, descriptions));
}
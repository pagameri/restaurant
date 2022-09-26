import Contact from './contact.jpg';


function addMainContent() {

  const contactContainer = document.createElement('dvi');
  contactContainer.classList.add('contact-content',);

  const contact = document.createElement('div');
  contact.textContent = "Contact Us:";
  contactContainer.appendChild(contact);

  const tel = document.createElement('p');
  tel.textContent = "Tel: 01234 567 959";
  contactContainer.appendChild(tel);

  const email = document.createElement('p');
  email.textContent = "Email: locale@locale-bistro.co.uk";
  contactContainer.appendChild(email);

  const address = document.createElement('p');
  address.textContent = "Address: 56 Pierre Street, York, YO53 6DV";
  contactContainer.appendChild(address);

  const opening = document.createElement('div');
  opening.textContent = "Our opening hours are:";
  contactContainer.appendChild(opening);
  
  let openHours = [
    'Monday: 9am - 9pm',
    'Tuesday: 9am - 9pm',
    'Wednesday: 9am - 9pm',
    'Thursday: 9am - 9pm',
    'Friday: 9am - 11pm',
    'Saturday: 10am - 11pm',
    'Sunday: 10am - 5pm',
  ]

  for (let i = 0; i < openHours.length; i++) {
    const p = document.createElement('p');
    p.textContent = openHours[i];
    contactContainer.appendChild(p);
  }

  return contactContainer;
}

function addImage() {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  const image = new Image();
  image.src = Contact;

  imageContainer.appendChild(image);

  return imageContainer;
}



export default function loadContactTab() {
  const content = document.getElementById('content');
  content.appendChild(addImage());
  content.appendChild(addMainContent());
}

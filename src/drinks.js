import Drinks from './drinks.jpg';
import addMenu from './createMenu.js'

 const items = [
  'AMERICANO £2.25',
  'COFFEE LATTE £2.25',
  'CAPPUCCINO £2.25',
  'ESPRESSO £8.50',
  'TEA £6.35', 
  'BUDWEISER £5.95',
  'GUINESS £7.25',
  'PINOT GRIGIO £3.95 / £13.45',
  'SAUVIGNON BLANC £4.25 / £13.95',
  'MERLOT £3.95 / £13.45',
  'CABERNET SAUVIGNON £4.25 / 13.95',
  'DAIQUIRI £5.95',
  'MOJITO £5.95',
  'DRAGONFRUIT MOJITO £5.95',
]  

const descriptions = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
]

export default function fillMenu() {
  addMenu(Drinks, items, descriptions);  
}
import Breakfast from './breakfast.jpg';
import addMenu from './createMenu.js';

 const items = [
  'CROISSANT £2.25',
  'PAIN AUX RAISINS £2.25',
  'PAIN AU CHOCOLAT £2.25',
  'FULL ENGLISH BREAKFAST £8.50',
  'AVOCADO TOAST £6.35', 
  'FRENCH TOAST £5.95',
  'EGGS BENEDICT £7.25',
  'EGGS FLORENTINE £6.75',
  'EGGS ROYALE £8.25'
]  

const descriptions = [
  '',
  '',
  '',
  'Two free-range eggs, bacon, sausage, grilled tomato, chestnut mushrooms, toast',
  'Smashed avocado, toasted seeds (contains nuts), poached eggs, chilli, sourdough toast',
  'Brioche, wild berry compote, fresh berries, crème fraîche',
  'Two poached eggs, toasted muffin, homemade hollandaise, ham',
  'Two poached eggs, toasted muffin, homemade hollandaise, sautéed spinach',
  'Two poached eggs, toasted muffin, homemade hollandaise, smoked salmon',
]


export default function fillMenu() {
  addMenu(Breakfast, items, descriptions);  
}
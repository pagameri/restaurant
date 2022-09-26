import Lunch from './lunch.jpg';
import addMenu from './createMenu.js'

 const items = [
  'CHICKEN LIVER PÂTÉ £6.25',
  'BAKED JACKET POTATOES £6.35', 
  'ROASTED SHALLOT TARTE TATIN £6.35',
  'CRISPY CONFIT DUCK SALAD £8.25',
  'RUMP STEAK CIABATTA £9.25',
  'SMOKED CHEESE & PROSCIUTTO CIABATTA £7.50',
  'CAESAR SALAD £8.95',
  'SEA BASS FILLET £7.25',
]  

const descriptions = [
  'Apple chutney, toasted baguette',
  'choose an option, any extra charged at £1.50 each: chili, beans, mozzarella, prawns, coleslaw',
  'Crisp puff pastry topped with roasted shallots, red wine & armagnac. Ratatouille, balsamic-glazed button mushrooms, broccoli',
  'Glazed crispy duck confit, oranges, watercress, French bean & courgette salad, yoghurt dressing',
  'mustard mayo, roasted red onion, Merlot & beef dripping sauce, crispy onion, vine tomatoes, rocket salad, skin-on fries',
  'roasted pepper, vine tomatoes, rocket salad, skin-on fries',
  'baby gem lettuce, anchovies, shaved parmesan, ciabatta croutons',
  'Lemon butter sauce, dauphinoise potato, padron peppers, tomato salsa',
]

export default function fillBMenu() {
  addMenu(Lunch, items, descriptions);  
}
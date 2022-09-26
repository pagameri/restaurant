import Dinner from './dinner.jpg';
import addMenu from './createMenu.js'

 const items = [
  'CLASSIC CHEESEBURGER £9.25',
  'OVEN BAKED SEA BASS £12.25',
  'FULL RACK OF RIBS £15.95',
  'PHILLY CHEESESTEAK PIZZA £11.50',
  'BLUE CHEESE GNOCCHI £10.85', 
  'OVEN BAKED LASAGNE £11.15',
  'SEAFOOD LINGUINE £10.75',
  'CHICKEN & ASPARAGUS RISOTTO £9.65',
  'TOMAHAWK RIBEYE 25.95'
]  

const descriptions = [
  'beef patty, Monterey Jack cheese, burger sauce, lettuce, tomato in a brioche bun',
  'gnocchi, broccoli, peppers, olives, chilli, baby plum tomatoes, white wine',
  'marinated and roasted in a sticky barbecue sauce, with corn on the cob',
  'thinly cut strips of marinated steak, roasted red onion, chimichurri dressing, mozzarella, Monterey Jack cheese,baby plum tomatoes',
  'creamy mushroom and spinach sauce',
  'rich beef ragù, layered pasta, topped with a creamy béchamel sauce and cheese',
  'prawns, mussels, squid, white wine, garlic, fennel, capers, red chilli',
  'Cheddar, Riserva cheese, peas, garlic',
  'Two poached eggs, toasted muffin, homemade hollandaise, smoked salmon',
]

export default function fillMenu() {
  addMenu(Dinner, items, descriptions);  
}
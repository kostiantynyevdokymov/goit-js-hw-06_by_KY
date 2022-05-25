const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listIngridients = document.createElement('section');
listIngridients.setAttribute('id','test');

const ul = document.createElement('ul');


document.body.appendChild(listIngridients);
listIngridients.appendChild(ul);

for (let i = 0; i < ingredients.length; i += 1) {

  const li = document.createElement('li');
  li.classList.add('item');
  ul.appendChild(li);
  li.innerHTML = li.innerHTML + ingredients[i]
};

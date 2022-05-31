const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl);

const El = [];

let linksEl = ingredients.forEach((ingredient) => {
  let ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = ingredient;
  El.push(ingredientEl);
});
ingredientsEl.append(...El);
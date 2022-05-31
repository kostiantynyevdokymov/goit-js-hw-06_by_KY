const categoriesEl = document.querySelectorAll("ul#categories > li");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((cat) => {
  const titleEl = cat.querySelector("h2");
  const items = cat.querySelectorAll("ul > li");
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${items.length}`);
});

const allCatgories = document.querySelectorAll(`.item`);
console.log(`Number of category: ${allCatgories.length}`);

for (const item of allCatgories) {
    console.log(`Category:` + item.firstElementChild.textContent);
    const arItems = item.querySelectorAll(`li`);
    console.log(`Element: ${arItems.length}`);
}




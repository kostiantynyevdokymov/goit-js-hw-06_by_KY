function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElem = document.body;
const changeColorBtn = document.querySelector(`.change-color`);
const textColor = document.querySelector(`.color`);

function changeColorBtnF() {
  const random = getRandomHexColor();
  bodyElem.style.backgroundColor = `${random}`;
  textColor.textContent = random;

}
changeColorBtn.addEventListener("click", changeColorBtnF);
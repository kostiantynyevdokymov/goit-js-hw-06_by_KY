function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector(`[data-create]`);
const destroy = document.querySelector(`[data-destroy]`);
const boxes = document.getElementById(`boxes`);

create.addEventListener(`click`, getAmount);
destroy.addEventListener(`click`, destroyBoxes);

function getAmount() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}
function createBoxes(amount) {
 
  const fragment = document.createDocumentFragment();
  
  console.log(boxes);
  const childrenNum = boxes.childNodes.length;
  let width = 30 + 10 * childrenNum;
  let height = 30 + 10 * childrenNum;

  for (let index = 1; index <= amount; index += 1) {

    const div = document.createElement("div");
    div.style.cssText = `width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
    width += 10;
    height += 10;
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
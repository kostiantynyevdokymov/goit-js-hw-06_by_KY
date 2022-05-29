function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector(`[data-create]`);
const destroy = document.querySelector(`[data-destroy]`);
const boxes = document.getElementById(`#boxes`);

create.addEventListener(`click`, getAmount);
destroy.addEventListener(`click`, destroyBoxes);

function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}
function createBoxes(amount) {
  const basicSize = 1;
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < amount; index += 1) {
    const elSize = basicSize + index * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${elSize}; height: ${ elSize }; background-color: RGBA( ${getRandomHexColor()}, ${getRandomHexColor()}, ${getRandomHexColor()})`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
// function random() {
//   return Math.floor(Math.random() * 256);
// }


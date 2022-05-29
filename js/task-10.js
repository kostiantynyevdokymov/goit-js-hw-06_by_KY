function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector(`[data-create]`);
const destroy = document.querySelector(`[data-destroy]`);
const boxes = document.getElementById(`boxes`);

create.addEventListener(`click`, getAmount);
destroy.addEventListener(`click`, destroyBoxes);

function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}
function createBoxes(amount) {
  const basicSize = 0;
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < amount; index += 1) {
    const elSize = basicSize + index * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${elSize}; height: ${elSize}; background-color: rgba( ${getRandomHexColor()}, ${getRandomHexColor()}, ${getRandomHexColor()})`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

// var render = document.querySelector('[data-action="create"]');
// var destroy = document.querySelector('[data-action="destroy"]');
// var boxes = document.getElementById('boxes');
// render.addEventListener('click', getAmount);
// destroy.addEventListener('click', destroyBoxes);

// function getAmount() {
//   var amount = +document.querySelector('#controls input').value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   var basicSize = 30;
//   var fragment = document.createDocumentFragment();
//   for (var i = 0; i < amount; i++) {
//     var size = basicSize + i * 10;
//     var div = document.createElement('div');
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${getRandomHexColor()}, ${getRandomHexColor()}, ${getRandomHexColor()} )`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = '';
// }
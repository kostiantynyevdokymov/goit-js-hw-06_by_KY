
const textFont = document.getElementById(`font-size-control`);
const text = document.getElementById(`text`);

textFont.oninput = function () {
    text.style.fontSize = textFont.value + 'px';
}
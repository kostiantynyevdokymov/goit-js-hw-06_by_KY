const inputEl = document.querySelector("#validation-input");
const inputLength = document.querySelector("input[data-length]");

inputEl.addEventListener("blur", changeBorder);

function changeBorder(event) {
  const inputValue = event.currentTarget.value;
  const lengthInput = inputValue.length;
  const dataLengthEl = Number(inputEl.dataset.length);

  if (lengthInput === dataLengthEl) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
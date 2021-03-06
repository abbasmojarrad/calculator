const buttonsContainer = document.querySelector(".buttons"),
  equal = document.querySelector("#equal"),
  input = document.querySelector("#input"),
  clear = document.querySelector("#clear"),
  erase = document.querySelector("#erase");
let equalCheck = false;
const calculate = () => {
  try {
    let display = null;
    display = eval(input.value);
    input.value = Number.isInteger(display) ? display : display.toFixed(2);
    equalCheck = true;
  } catch (error) {
    alert("error");
    input.value = "";
  }
};
const btnClickHandler = ({ target }) => {
  if (target.matches(".input-button")) {
    equalCheck && (input.value = "");
    input.value += target.value;
    equalCheck = false;
  }
};
window.addEventListener("load", () => (input.value = ""));
buttonsContainer.addEventListener("click", btnClickHandler);
equal.addEventListener("click", calculate);
clear.addEventListener("click", () => (input.value = ""));
erase.addEventListener("click", () => (input.value = input.value.slice(0, -1)));

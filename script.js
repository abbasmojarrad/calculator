const buttonsContainer = document.querySelector(".buttons"),
 equal = document.querySelector("#equal"),
 input = document.querySelector("#input"),
 clear = document.querySelector("#clear"),
 erase = document.querySelector("#erase");

const calculate = () =>{
    try {
        let display = null;
        display = eval(input.value);
        input.value = Number.isInteger(display) ? display : display.toFixed(2);
      } catch (error) {
        alert("error");
        input.value = "";
      }
}
window.addEventListener("load", () =>  input.value = "");
buttonsContainer.addEventListener("click", ({target}) => target.matches(".input-button") && (input.value += target.value));
equal.addEventListener("click", calculate);
clear.addEventListener("click", () => input.value = "");
erase.addEventListener("click", () => input.value = input.value.slice(0, -1));


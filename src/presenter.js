
import sumar from "./sumador";
import multiplicar from "./multiplicador"; 
import saludar from "./saludador"; 

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

const firstMultipy = document.querySelector("#primer-numero-multiplicar");
const secondMultiply = document.querySelector("#segundo-numero-multiplicar");
const formMultiply = document.querySelector("#multiplicar-form");
const divMultiply = document.querySelector("#resultado-multiplicar-div");

formMultiply.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumberMultiply = Number.parseInt(firstMultipy.value);
  const secondNumberMultiply = Number.parseInt(secondMultiply.value);

  divMultiply.innerHTML = "<p>" + multiplicar(firstNumberMultiply, secondNumberMultiply) + "</p>";
});

const formSaludar = document.querySelector("#saludar-form");
const nombreInput = document.querySelector("#nombre-input");
const divSaludar = document.querySelector("#resultado-saludo-div");

formSaludar.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nombreInput.value;
  divSaludar.innerHTML = "<p>" + saludar(nombre) + "</p>";
});

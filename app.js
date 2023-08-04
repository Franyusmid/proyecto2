// clases
class form {
  constructor(input, onButton) {
    this.input = input;
    this.onButton = onButton;
  }
}

// seleccion
const input = document.querySelector(".input");
console.log(input);
const onButton = document.querySelector("#onButton");
console.log(onButton);

// Eventos

onButton.addEventListener("click", (evt) => {
  evt.preventDefault();

  console.log("evt", evt);
  console.log("Dimos click al botton");

  const inputValue = input.value;
  console.log("El valor del input de nombre es:", inputValue);
  console.log("El valor del input de nombre es:", inputValue);
});

// 1.seleccion
const HousePetName = document.querySelector(".housePetName");
const owner = document.querySelector(".owner");
const Phone = document.querySelector(".Phone");
const Date = document.querySelector(".Date");
const Time = document.querySelector(".Time");
const symptom = document.querySelector("#symptom");
const onButton = document.querySelector("#onButton");
const form = document.querySelector("#form");
// Contenedor para las citas
const DateList = document.querySelector("#DateList");
document.addEventListener("DOMContentLoaded", paint);
// console.log("DateList", DateList);
onButton.addEventListener("click", (evt) => {
  // Estraccion de Datos
  evt.preventDefault(evt);
  const object = {
    inputHousePetName: HousePetName.value,
    inputOwner: owner.value,
    inputPhone: Phone.value,
    inputDate: Date.value,
    inputtime: Time.value,
    inputsymtom: symptom.value,
  };
  datum = JSON.parse(localStorage.getItem("value"));
  if (datum == null) {
    data = [];
  }

  data.push(object);
  localStorage.setItem("value", JSON.stringify(data));

  form.reset();
  paint();
});

function paint() {
  data = JSON.parse(localStorage.getItem("value"));
  DateList.innerHTML = data
    .map((datum, index) => {
      return `
      <section class="card">
        <span class"dsf">Nombre de la Mascota:</span>"${datum.inputHousePetName}</span>
        <span>${datum.inputOwner}</span>
        <span>${datum.inputPhone}</span>
        <span>${datum.inputDate}</span>
        <span>${datum.inputtime}</span>
        <span>${datum.inputsymtom}</span>
        <button class="butedit" onClick="edit (${index})">editar</button>
        <button class="butClean" onClick="clean(${index})">borrar</button>
      </section>
      `;
    })
    .join("");
}

function edit(index) {
  const housePetNameEdit = prompt(
    "edita el nombre de la mascota",
    data[index].inputHousePetName
  );
  data[index].inputHousePetName = housePetNameEdit;

  const ownerEdit = prompt(
    "edita el nombre del propietario",
    data[index].inputOwner
  );
  data[index].inputOwner = ownerEdit;

  const PhoneEdit = prompt(
    "edita el numero de Telefono",
    data[index].inputPhone
  );
  data[index].inputPhone = PhoneEdit;

  const DateEdit = prompt("edita la fecha", data[index].inputDate);
  data[index].inputDate = DateEdit;

  const symptomEdit = prompt("edita los sintomas", data[index].inputsymtom);
  data[index].inputsymtom = symptomEdit;

  localStorage.setItem("value", JSON.stringify(data));
  paint();
}

function clean(index) {
  data.splice(index, 1);
  localStorage.setItem("value", JSON.stringify(data));
  paint();
}

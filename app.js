// 1.seleccion
/*Las selecciones tambien se pueden realizar dentro de los eventos no obstante es mejor 
ralizarlo por separado para una mejor estructura del codigo*/
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
// 2.Eventos
// se pasa 2 arguementos
// 1-el primer argumento es lo que se hece y el 2- es una funcio(colbag condicionada por la fucion)
// onButton.addEventListener("lo que se hace", (la  fucion)
onButton.addEventListener("click", (evt) => {
  evt.preventDefault(evt);
  /*.Value es un atributo que extrae el valor del input*/

  const object = {
    inputHousePetName: HousePetName.value,
    inputOwner: owner.value,
    inputPhone: Phone.value,
    inputDate: Date.value,
    inputtime: Time.value,
    inputsymtom: symptom.value,
  };

  /* LOCAL STORAGE 
  Almacenemiento de datos ennel navegador
  No hay  expiracion 
  se utiliza para guardar datos en persistencia.No importa
  el el usuario refresca la pantalla, el dato se mantiene*/

  // localStorage.setItem: se utiliza para  generar o insertar  los datos en el navegador
  // localStorage.getItem:se paa obtener los datos que se crean en el navegdor
  // LocalStorage solo recibe string(texto)
  //localStorage: borra todos los  datos almacenados
  // localStorage.removeItem: se utiliza para borrar un valor en espacifico

  datum = JSON.parse(localStorage.getItem("value"));
  if (datum == null) {
    data = [];
  }
  data.push(object);
  localStorage.setItem("value", JSON.stringify(data));
  // JSON.stringify:Convierte un objeto o valor en una cadena de texto JSON,
  form.reset();
  paint();
});

function paint() {
  // JSON.parse convierte el texto en un arrglo desde el localStorage
  // .map sirve para itinerar un arreglo es decir conectar los string de clave: valor
  data = JSON.parse(localStorage.getItem("value"));
  DateList.innerHTML = data
    .map((datum, index) => {
      return `
      <section class="card">
        <div class="SpaceLabel">
          <p class="Name">Mascota: </p>
          <P class="outValue"> ${datum.inputHousePetName}</p>
        </div>
        <div class="SpaceLabel">
          <p class="Name">Propietario: </p>
          <p class="outValue">${datum.inputOwner}</p>
        </div>
        <div class="SpaceLabel">
          <p class="Name">Telefono: </p>
          <p class="outValue">${datum.inputPhone}</p>
        </div> 
        <div class="SpaceLabel">
          <p class="Name">Fecha:</p>
          <p class="outValue">${datum.inputDate}</p>
        </div>  
        <div
        <div class="SpaceLabel">
          <p class="Name">Hora:</p>
          <p class="outValue">${datum.inputtime}</p>
        </div>
        <div class="SpaceLabel">
          <p class="Name">Sintomas:</p>
          <p class="outValue">${datum.inputsymtom}</p>
        </div>  
        <div class="SpaceButton">
          <button class="ButtonE" onClick="edit (${index})">editar</button>
          <button class="ButtonC" onClick="clean(${index})">borrar</button>
        </div>
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

  const timeEdit = prompt("edita la hora", data[index].inputtime);
  data[index].inputtime = timeEdit;

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

// clases
class form {
  constructor(
    housePetName,
    owner,
    Phone,
    Date,
    Time,
    symptom,
    onButton,
    DateList
  ) {
    this.housePetName = housePetName;
    this.owner = owner;
    this.Phone = Phone;
    this.Date = Date;
    this.Time = Time;
    this.symptom = symptom;
    this.onButton = onButton;
    this.DateList = DateList;
  }
}

// seleccion
const housePetName = document.querySelector(".housePetName");
const owner = document.querySelector(".owner");
const Phone = document.querySelector(".Phone");
const Date = document.querySelector(".Date");
const Time = document.querySelector(".Time");
const symptom = document.querySelector("#symptom");
const onButton = document.querySelector("#onButton");
const DateList = document.querySelector("#DateList");
console.log(
  housePetName,
  owner,
  Phone,
  Date,
  Time,
  symptom,
  onButton,
  DateList
);

// Eventos O Manipulacion

onButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  const object = {
    housePetName: housePetName.value,
    owner: owner.value,
    Phone: Phone.value,
    Date: Date.value,
    Time: Time.value,
    symptom: symptom.value,
  };
  let datos = JSON.parse(localStorage.getItem("valores"));
  if (datos === null) {
    datos = [];
  }
  datos.push(object);
  localStorage.setItem("valores", JSON.stringify(datos));

  DateList.innerHTML = datos
    .map((dato) => {
      return `<h3>${dato.housePetName}</h3>
      <h2></h2>`;
    })
    .join("");
});



// [2:39 p. m.] Cristhian Johan Rodriguez Cardona

// function pintar(){

//     datos = JSON.parse(localStorage.getItem("valores"));

//     mostrar.innerHTML = datos

//     .map((dato, index) => {

//         return `

//         <div class="card">

//         <h3>${dato.nombre}</h3>

//         <h3>${dato.telefono}</h3>

//         <h3>${dato.precio}</h3>

//         <button class="botones" onClick="editar(${index})">editar</button>

//         <button class="botones" onClick="borrar(${index})">borrar</button>

//         </div>

//         `;

//         })

//         .join("");

}
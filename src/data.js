<<<<<<< HEAD
// [1960,1965,1970]
// colocar en un select o como opciones de busqueda en el select.
// meter en un input?
// Copia de objeto con los años number {Year: 1960}
const cambiarPropiedad = (data) => { 
    return data.map(obj => Object.assign({}, obj, {Year: (new Date(obj.Year).getFullYear())}));
  };
  // Crear una funcion que tome propiedades especificas.
  const filtrarPropiedadEspecifica = (data, propiedad) => {
    const newArr = data.map((obj) => {
      return obj[propiedad];
    });
    return newArr;
  };
  // filtrar Años dentro de un select - requisiito 1
  const recib = (data, inputUs) => {
    return data.filter((ele) => {
      return ele.Year === parseInt(inputUs);
    });
  };
  // filtrar Años dentro de un select - requisito 2
  window.injuries = {
    
    cambiarPropiedad,
    filtrarPropiedadEspecifica,
    recib,
    
  };
=======
const buttonTabla = document.getElementById("tabla_general");
const tabla = document.getElementById ("tablegeneric");

buttonTabla.addEventListener('click', () => {

const data = INJURIES;

//creo la funcion years, con dos parametros para llamar el indice del array
function years(item,index) {
const fullname = parseInt([item.Year]);
return fullname;
}

function totalinjuries (item,index) {
    const tInjuries = [item.Total_Injured_Persons];
    return tInjuries;
}

function tpersonInjucar (item,index) {
    const tInjuriesCar = [item.Total_Injured_Persons_Passenger_Car_Occupants];
    return tInjuriesCar;
}

const vg = data.map(years);
const ti= data.map(totalinjuries);
const tc= data.map(tpersonInjucar);


tableInfo();

function tableInfo()  {
 
 const tabla   = document.getElementById("tablegeneric"),
       tbody = document.querySelector("#tablegeneric tbody");

 tbody.innerHTML = ' ';

const arrYear = vg,
       arrHeridos= ti,
       arrMuertos= tc;

 const nCantidadYears = vg.length;

 for (let i=0; i < nCantidadYears; i++) {

   const fila = document.createElement("tr");

   const celdaYear = document.createElement ("td"),
         celdaHeredidos = document.createElement ("td"),
         celdaMuertos = document.createElement ("td");

   const nodoTextYear = document.createTextNode (arrYear[i]),
         nodoTextHeridos = document.createTextNode (arrHeridos[i]),
         nodoTextMuertos = document.createTextNode (arrMuertos[i]);

   celdaYear.appendChild(nodoTextYear);
   celdaHeredidos.appendChild(nodoTextHeridos);
   celdaMuertos.appendChild(nodoTextMuertos);

   fila.appendChild(celdaYear);
   fila.appendChild(celdaHeredidos);
   fila.appendChild(celdaMuertos);

   tbody.appendChild(fila);
    }
  tabla.setAttribute("border", "2");
 }
 })

window.INJURIES = INJURIES;
>>>>>>> 411658c62132851991c326e6f763574371339bff

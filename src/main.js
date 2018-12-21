/* eslint-disable no-undef */
// HTML - variables del DOM
const selectDocumentYear = document.getElementById('select_year');
const selectDocumentMinYear = document.getElementById('select_min_year');
const selectDocumentMaxYear = document.getElementById('select_max_year');
const btnMostrarAños = document.getElementById('btn_mostrar_años');

// Data del archivo data.js
/* Copia de la data Original*/
const newData = cambiarPropiedad(INJURIES); // array de objetoos
const years = filtrarPropiedadEspecifica(newData, 'Year'); // Array solo con los valores de la propiedad Year

// DOM para mostrar data en pantalla
const filterForYear = document.getElementById('filter_years');
const filterForRang = document.getElementById('filter_rang');
// Muestra años en las casillas del select con su respectivo valor.

const mostrarCasillasEnSelect = (array) => {
  let recibirArreglo = '';
  array.forEach((ele) => {
    recibirArreglo += `<option value = "${ele}">${ele}</option>`;
  }); 
  return recibirArreglo;
};

selectDocumentYear.innerHTML = mostrarCasillasEnSelect(years);
selectDocumentMinYear.innerHTML = mostrarCasillasEnSelect(years);
selectDocumentMaxYear.innerHTML = mostrarCasillasEnSelect(years);

selectDocumentYear.addEventListener('change', (event) => {
  const result = filtro(newData, (parseInt(event.target.value)));
  const listarItems = (array) => {
    let cadena = '';
    array.forEach((obj) => { 
      cadena += `
        <div class = "card-year">
           <article class = "prop-year">
            <h2 class = "filter-year">${obj.Year}</h2>
            <div class = "total-heridos-por-año"/>
                <div> General por año: <span class="info"> ${obj.Total_Injured_Persons}</span></div>
                <div> En aire: ${obj.Total_Injured_Persons_Air}</div>
                <div> Ocupantes de bus: ${obj.Total_Injured_Persons_Bus_Occupants}</div>
                <div> Personas lesionadas en carretera: ${obj.Total_Injured_Persons_Highwayr}</div>
                <div> En motocicleta: ${obj.Total_Injured_Persons_Motorcyclists}</div>
                <div> Ocupantes en automóviles: ${obj.Total_Injured_Persons_Passenger_Car_Occupants}</div>
                <div> Pasajeros de automóviles: ${obj.Total_Injured_Persons_Passenger_Or_Occupant}</div>
                <div> Peatones heridos: ${obj.Total_Injured_Persons_Pedestrians}</div>
                <div> Personas lesionadas en aerolíneas de EEUU: ${obj.Total_Injured_Persons_US_Air_Carrier}</div>    
            </div>
            </article>
        </div>
        `;
    });
    
    return cadena;
  };
  
  
  filterForYear.innerHTML = listarItems(result);
});


btnMostrarAños.addEventListener('click', (event) => {
    const minYear = selectDocumentMinYear.value;
    const maxYear = selectDocumentMaxYear.value;

  const result = filtroMinMax(newData, event.target.minYear, event.target.maxYear);
  const listarItems = (array) => {
    let cadena = '';
    array.forEach((obj) => { 
      cadena += `<div> Peatones heridos: ${obj.Total_Injured_Persons_Pedestrians}</div>` ;
    });
    
    return cadena;
    console.log(cadena);
  };
  
  
  filterForRang.innerHTML = listarItems(result);
});
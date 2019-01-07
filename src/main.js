// Variables para jalar los id del HTML
const selectDocumentYear = document.getElementById('select_year');
const selectDocumentMinYear = document.getElementById('select_min_year');
const selectDocumentMaxYear = document.getElementById('select_max_year');
const btnShowYear = document.getElementById('btn_show_year');
const selectDocumentOrder = document.getElementById('order');
const selectDocumentCalculo = document.getElementById('calc');

// DOM para mostrar data en pantalla
const filterForYear = document.getElementById('filter_years');
const filterForRang = document.getElementById('filter_rang');
const orderYear = document.getElementById('order_years');
const viewYearsCol = document.getElementById('calculate_years');
const alertData = document.getElementById('alert_data');

// Data del archivo data.js

/* Copia de la data Original*/
const allData = injuries.changeProperty(INJURIES); // array de objetoos
const newData = allData.slice(7, 32); // array de objetos 
const years = injuries.filterData(newData, 'Year');

/* Ocultar y mostrar pantallas */

const showFilterWindow = document.getElementById('mostrar_filtros');
showFilterWindow.addEventListener('click', () => {
  document.getElementById('graficos').style.display = 'none';
  document.getElementById('page_five').style.display = 'none';
  const elemento = document.getElementById('filtros');
  if (elemento.style.display === 'none') {
    elemento.style.display = 'block';
  } else {
    elemento.style.display = 'none';
  }
});

const showGraphics = document.getElementById('button_graficos');
showGraphics.addEventListener('click', () => {
  document.getElementById('filtros').style.display = 'none';
  document.getElementById('home_text_1').style.display = 'none';
  document.getElementById('home_text_2').style.display = 'none';
  document.getElementById('page_five').style.display = 'none';
  const elemento = document.getElementById('graficos');
  if (elemento.style.display === 'none') {
    elemento.style.display = 'block';
  } else {
    elemento.style.display = 'none';
  }
});

const showCalculate = document.getElementById('calc');
showCalculate.addEventListener('click', () => {
  document.getElementById('filtros').style.display = 'none';
  document.getElementById('home_text_1').style.display = 'none';
  document.getElementById('home_text_2').style.display = 'none';
  document.getElementById('graficos').style.display = 'none';
  const elemento = document.getElementById('page_five');
  if (elemento.style.display === 'none') {
    elemento.style.display = 'block';
  } else {
    elemento.style.display = 'none';
  }
});
/* Fin de mostrar y ocultar pantallas */

// Funcion para mostrar cartas solo con los valores de la propiedad Year
const listitems = (obje, dive) => {
  let cadena = '';
  
  obje.forEach((obj) => { 
    cadena += `<div class = "card-year">
    <article class = "prop-year">
     <h2 class = "filter-year">${obj.Year}</h2>
     <div/>
         <div class = "group"> General por año: <span class="info"> ${obj.Total_Injured_Persons}</span></div>
         <div class = "group"> En aire:<span class="info"> ${obj.Total_Injured_Persons_Air}</span></div>
         <div class = "group"> Ocupantes de bus: <span class="info">${obj.Total_Injured_Persons_Bus_Occupants}</span></div>
         <div class = "group"> Personas lesionadas en carretera:<span class="info"> ${obj.Total_Injured_Persons_Highway}</span></div>
         <div class = "group"> En motocicleta:<span class="info"> ${obj.Total_Injured_Persons_Motorcyclists}</span></div>
         <div class = "group"> Ocupantes en automóviles:<span class="info"> ${obj.Total_Injured_Persons_Passenger_Car_Occupants}</span></div>
         <div class = "group"> Pasajeros de automóviles:<span class="info"> ${obj.Total_Injured_Persons_Passenger_Or_Occupant}</span></div>
         <div class = "group"> Peatones heridos:<span class="info">${obj.Total_Injured_Persons_Pedestrians}</span></div>
         <div class = "group"> Personas lesionadas en aerolíneas de EEUU: <span class="info">${obj.Total_Injured_Persons_US_Air_Carrier}</span></div>
     </div>
     </article>
 </div>
    `;
  });
  dive.innerHTML = cadena;
};

// Template para colocar la tabla de cálculo

const tableCalculate = (dive) => {
  let result = '';
  const nullDataZero = injuries.nulltozero(newData);
  nullDataZero.forEach((obj) => { 
    result += `
   <tr>
     <td>${obj.Year}</td>
     <td> ${obj.Total_Injured_Persons}</td>
   </tr>
    `;
  });
  dive.innerHTML = result;
};

// Funcion para mostrar los años en el select
const showCasillasInSelect = (array) => {
  let recibirArreglo = '';
  array.forEach((ele) => {
    recibirArreglo += `<option value = "${ele}">${ele}</option>`;
  }); 
  return recibirArreglo;   
};

selectDocumentYear.innerHTML = showCasillasInSelect(years);
selectDocumentMinYear.innerHTML = showCasillasInSelect(years);
selectDocumentMaxYear.innerHTML = showCasillasInSelect(years);

// Mostrar cartas según la selección ingresada por el usuario
 
selectDocumentYear.addEventListener('change', (event) => {
  let result = injuries.strainer(newData, (parseInt(event.target.value)));
  let resultCero = injuries.nulltozero(result);
  listitems(resultCero, filterForYear);
}); 

// Función para mostrar en pantalla el filtro por rango de años
btnShowYear.addEventListener('click', () => {
  let minYear = selectDocumentMinYear.value;
  let maxYear = selectDocumentMaxYear.value;
  if (minYear > maxYear) {
    alertData.innerHTML = `<div class = "alert_rang"><span class = "title_alert">Error Status</span>
                                                     <span class = "parr_alert">Año incorrecto, el ingreso debe de ser de menor a mayor</span>
</div>`;
  } else {
    let respt = injuries.filterMinMax(newData, minYear, maxYear);
    let resultS = injuries.nulltozero(respt);
    // sort a rangos
    listitems(resultS, filterForRang);
  }
});

// Función para ordenar los datos por años y mostrarlos en pantalla

selectDocumentOrder.addEventListener('change', () => {
  const yearOrder = injuries.sortData(newData, event.target.value);
  const yearOrderzero = injuries.nulltozero(yearOrder);
  listitems(yearOrderzero, orderYear);
});


// Función para realizar la suma total de personas heridas
const calculateTotal = document.getElementById('calculate_total');
selectDocumentCalculo.addEventListener('click', () => {
  const injuriesTotal = injuries.filterData(newData, 'Total_Injured_Persons');
  const calculateDataSum = injuries.computeStats(injuriesTotal);
  tableCalculate(viewYearsCol);
  calculateTotal.innerHTML = calculateDataSum;
});
/* copia de data */
const allDataforpie = injuries.changeProperty(INJURIES); 
const newDataforpie = allDataforpie.slice(6, 32);
const listProperty = document.getElementById('list_property');

/* array con propiedades del objeto */
const filterProperty = (data) => {
  const newArrProperty = data.map((obj) => {
    return obj;
  });
  const arrProperty = newArrProperty[0];
  return Object.keys(arrProperty);
};

/* Función que muestra las los elementos del objeto sin el caracter /_/ subguion */
const filterOfProperty = filterProperty(newData);

const showPropertyList = (array) => {
  let recibirArreglo = '';
  array.forEach((ele) => {
    let ele2 = ele.replace(/_/g, ' ');

    recibirArreglo += `<li><button value = "${ele}">${ele2}</button></li>`;
  }); 
  return recibirArreglo;   
};


listProperty.innerHTML = showPropertyList(filterOfProperty); // un array de todas las propiedades del objeto


listProperty.addEventListener('click', (event) => {
  const arrOfArrChartsForPie = injuries.arrOfArrFunction(newDataforpie, 'Year', (event.target.value));

  // Cargue la API de visualización y el paquete piechart.
  window.google.charts.load('current', {'packages': ['corechart']});

  // Establezca una devolución de llamada para que se ejecute cuando se carga la API de visualización de Google.
  window.google.charts.setOnLoadCallback(drawChart);

  // La devolución de llamada que crea y completa una tabla de datos, crea una instancia del gráfico circular, pasa los datos y los dibuja.
  function drawChart() {
    // Creación de la data de la tabla.
    let data = new window.google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', '');
    data.addRows(arrOfArrChartsForPie);// recibe arrOfArrCharts
    // Establecer opciones de gráfico
    const options = {
      'height': 500,
      'responsive': true,
      'legend': {position: 'bottom', }
  
    };
    // Crea una instancia y dibuja nuestra gráfica, pasando algunas opciones.
    let chart = new window.google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
});
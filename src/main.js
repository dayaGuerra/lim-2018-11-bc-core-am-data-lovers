// Variables para jalar los id del HTML
const selectDocumentYear = document.getElementById('select_year');
const selectDocumentMinYear = document.getElementById('select_min_year');
const selectDocumentMaxYear = document.getElementById('select_max_year');
const btnMostrarAños = document.getElementById('btn_mostrar_años');
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
const allData = injuries.cambiarPropiedad(INJURIES); 
const newData = allData.slice(7, 32);// array de objetoos
const years = injuries.filtrarPropiedadEspecifica(newData, 'Year');

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

/* Inicio de template, muestra las cards con 
informacioón importante de la data */
const listarItems = (obje, dive) => {
  let cadena = '';
  
  obje.forEach((obj) => { 
    cadena += `<div class = "card-year">
    <article class = "prop-year">
     <h2 class = "filter-year">${obj.Year}</h2>
     <div/>
         <div class = "group"> General por año: <span class="info"> ${obj.Total_Injured_Persons}</span></div>
         <div class = "group"> Por aire:<span class="info"> ${obj.Total_Injured_Persons_Air}</span></div>
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
/* Template tabla total, muestra la tabla total */

// convertir datos null a 0
const denullacero = (data) => { 
  return data.map(element => {
    const keys = Object.keys(element);
    let aRetornar = Object.assign({}, element);
    keys.forEach(key => {
      if (element[key] === null) {
        aRetornar[key] = 'NO EXISTE DATA';
      }
    });
    return aRetornar;
  });
};

const tableCalculate = (dive) => {
  let result = '';
  const nullDataZero = denullacero(newData);
  console.log(nullDataZero);
  //  aqui esta la funcion de null a 0, esa funcion debe de cambiar de nombre
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

// Mostrar cartas según la selección ingresada por el usuario
selectDocumentYear.addEventListener('change', (event) => {
  let result = injuries.filtro(newData, (parseInt(event.target.value)));
  let resultCero = denullacero(result);
  listarItems(resultCero, filterForYear);
}); 
 
btnMostrarAños.addEventListener('click', () => {
  let minYear = selectDocumentMinYear.value;
  let maxYear = selectDocumentMaxYear.value;
  if (minYear > maxYear) {
    alertData.innerHTML = `<div class = "alert_rang"><span class = "title_alert">Error Status</span>
                                                     <span class = "parr_alert">Año incorrecto, el ingreso debe de ser de menor a mayor</span>
</div>`;
  } else {
    let respt = injuries.filtroMinMax(newData, minYear, maxYear);
    let resultS = denullacero(respt);
    // sort a rangos
    listarItems(resultS, filterForRang);
  }
});

selectDocumentOrder.addEventListener('change', () => {
  const yearOrder = injuries.sorts(newData, event.target.value);

  listarItems(yearOrder, orderYear);
});

const calculateTotal = document.getElementById('calculate_total');
selectDocumentCalculo.addEventListener('click', () => {
  const injuriesTotal = injuries.filtrarPropiedadEspecifica(newData, 'Total_Injuries_Persons');
  const calculateDataSum = injuries.calculate(injuriesTotal);
  console.log(calculateDataSum);
  tableCalculate(viewYearsCol);
  calculateTotal.innerHTML = calculateDataSum;
});
/* copia de data */
const allDataforpie = injuries.cambiarPropiedad(INJURIES); 
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


  // Load the Visualization API and the piechart package.
  window.google.charts.load('current', {'packages': ['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  window.google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table, 
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {
    // Create the data table.
    let data = new window.google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', '');
    data.addRows(arrOfArrChartsForPie);// recibe arrOfArrCharts


    // Set chart options
    const options = {
      'height': 500,
      'responsive': true,
      'legend': {position: 'bottom', }
  
    };
  
    // Instantiate and draw our chart, passing in some options.
    let chart = new window.google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
}); 


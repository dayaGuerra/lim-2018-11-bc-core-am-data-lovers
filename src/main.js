// Slideshow automatic
let slideIndex = 0;
const showSlides = () => {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000);
};

showSlides();

<<<<<<< HEAD
=======
// Menu de navegación
 
>>>>>>> 7a3ef29c22c743a180e667d080696c37636e9d27
const openNav = document.getElementById('open_nav');
openNav.addEventListener('click', () => {
  document.getElementById('mySidenav').style.width = '250px';
});

const closeNav = document.getElementById('close_nav');
closeNav.addEventListener('click', () => {
  document.getElementById('mySidenav').style.width = '0';
});


// Variables para jalar los id del HTML
const selectDocumentYear = document.getElementById('select_year');
const selectDocumentMinYear = document.getElementById('select_min_year');
const selectDocumentMaxYear = document.getElementById('select_max_year');
<<<<<<< HEAD
const btnMostrarAños = document.getElementById('btn_mostrar_años');
// const btnMostrarCalculo = document.getElementById('btn_mostrar_calculo');
// DOM para mostrar data en pantalla
const filterForYear = document.getElementById('filter_years');
const filterForRang = document.getElementById('filter_rang');
// const calculo = document.getElementById('calculo');
=======
const btnShowYear = document.getElementById('btn_show_year');
const selectDocumentOrder = document.getElementById('order');
const computeStatsTotal = document.getElementById('computeStats_total');
const selectDocumentCalculo = document.getElementById('calc');


// DOM para mostrar data en pantalla
const filterForYear = document.getElementById('filter_rang');
const filterForRang = document.getElementById('filter_years');
const orderYear = document.getElementById('order_years');
const viewYearsCol = document.getElementById('computeStats_years');


>>>>>>> 7a3ef29c22c743a180e667d080696c37636e9d27

// Data del archivo data.js

/* Copia de la data Original*/
<<<<<<< HEAD
const newData = injuries.cambiarPropiedad(INJURIES); // array de objetoos
const years = injuries.filtrarPropiedadEspecifica(newData, 'Year');
=======
const newData = injuries.changeProperty(INJURIES); // array de objetoos
const years = injuries.filterData(newData, 'Year');

>>>>>>> 7a3ef29c22c743a180e667d080696c37636e9d27
// Funcion para mostrar cartas solo con los valores de la propiedad Year
const listitems = (obje, dive) => {
  let cadena = '';
  obje.forEach((obj) => {
    cadena += `<div class = "card-year">
<<<<<<< HEAD
  <article class = "prop-year">
  <h2 class = "filter-year">${obj.Year}</h2>
  <div/>
  <div class = "group"> General por año: <span class="info"> ${obj.Total_Injured_Persons }</span></div>
  <div class = "group"> En aire:<span class="info"> ${obj.Total_Injured_Persons_Air }</span></div>
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
=======
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
>>>>>>> 7a3ef29c22c743a180e667d080696c37636e9d27
  });
  dive.innerHTML = cadena;
};

<<<<<<< HEAD
const tableCalculo = (obje, dive) => {
  let data = '';
  obje.forEach((obj) => {
    data += `
  `;
  });
  dive.innerHTML = data;
};











// convertir datos null a 0
const denullacero = (data) => {
=======

// Convertir datos null a 0
const nulltozero = (data) => { 
>>>>>>> 7a3ef29c22c743a180e667d080696c37636e9d27
  return data.map(element => {
    const keys = Object.keys(element);
    let aReturn = Object.assign({}, element);
    keys.forEach(key => {
      if (element[key] === null) {
        aReturn[key] = 0;
      }
    });
    return aReturn;
  });
};

<<<<<<< HEAD
const mostrarCasillasEnSelect = (array) => {
=======
// Template para colocar la tabla de cálculo

const tableCalculate = (objeto, dive) => {
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
>>>>>>> 7a3ef29c22c743a180e667d080696c37636e9d27
  let recibirArreglo = '';
  array.forEach((ele) => {
    recibirArreglo += `<option value = "${ele}">${ele}</option>`;
  });
  return recibirArreglo;
};

selectDocumentYear.innerHTML = showCasillasInSelect(years);
selectDocumentMinYear.innerHTML = showCasillasInSelect(years);
selectDocumentMaxYear.innerHTML = showCasillasInSelect(years);

<<<<<<< HEAD
selectDocumentYear.addEventListener('change', (event) => {
  let result = injuries.filtro(newData, (parseInt(event.target.value)));
  let resultCero = denullacero(result);
  listarItems(resultCero, filterForYear);
});
btnMostrarAños.addEventListener('click', () => {
=======
// Mostrar cartas según la selección ingresada por el usuario
 
selectDocumentYear.addEventListener('change', (event) => {
>>>>>>> 7a3ef29c22c743a180e667d080696c37636e9d27
  document.getElementById('page_one').style.display = 'none';
  document.getElementById('page_two').style.display = 'block';
  
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
    let respt = injuries.filtroMinMax(newData, minYear, maxYear);
    let resultS = denullacero(respt);
    // sort a rangos
    listarItems(resultS, filterForRang);
  }
});

<<<<<<< HEAD
// btnMostrarCalculo.addEventListener('click', () => {
// let minY = selectDocumentMinYear.value;
// let maxY = selectDocumentMaxYear.value;
// // let resptet = funcion de reduce
// let resultSx = denullacero(respt);
// listarItems(resultSx, calculo);
// });
=======
// Función para ordenar los datos por años y mostrarlos en pantalla

selectDocumentOrder.addEventListener('change', () => {
  document.getElementById('page_one').style.display = 'none';
  document.getElementById('page_four').style.display = 'block';

  const yearOrder = injuries.sortData(newData, event.target.value);
  const yearOrderzero = injuries.nulltozero(yearOrder);
  listitems(yearOrderzero, orderYear);
});

// Función para realizar la suma total de personas heridas
const calculateTotal = document.getElementById('calculate_total');
selectDocumentCalculo.addEventListener('click', () => {
  const injuriesTotal = injuries.filtrarPropiedadEspecifica(newData, 'Total_Injuries_Persons');
  const calculateDataSum = injuries.calculate(injuriesTotal);
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
>>>>>>> 7a3ef29c22c743a180e667d080696c37636e9d27

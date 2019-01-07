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

// Menu de navegación
 
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
const btnShowYear = document.getElementById('btn_show_year');
const selectDocumentOrder = document.getElementById('order');
const computeStatsTotal = document.getElementById('computeStats_total');
const selectDocumentCalculo = document.getElementById('calc');


// DOM para mostrar data en pantalla
const filterForYear = document.getElementById('filter_rang');
const filterForRang = document.getElementById('filter_years');
const orderYear = document.getElementById('order_years');
const viewYearsCol = document.getElementById('computeStats_years');


// Data del archivo data.js

/* Copia de la data Original*/
const newData = injuries.changeProperty(INJURIES); // array de objetoos
const years = injuries.filterData(newData, 'Year');

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
  document.getElementById('page_one').style.display = 'none';
  document.getElementById('page_two').style.display = 'block';
  
  let result = injuries.strainer(newData, (parseInt(event.target.value)));
  let resultCero = injuries.nulltozero(result);
  listitems(resultCero, filterForYear);
}); 

// Función para mostrar en pantalla el filtro por rango de años

btnShowYear.addEventListener('click', () => {
  document.getElementById('page_one').style.display = 'none';
  document.getElementById('page_three').style.display = 'block';
  
  let minYear = selectDocumentMinYear.value;
  let maxYear = selectDocumentMaxYear.value;
  let respt = injuries.filterMinMax(newData, minYear, maxYear);
  let resultS = injuries.nulltozero(respt);
  listitems(resultS, filterForRang);
});

// Función para ordenar los datos por años y mostrarlos en pantalla

selectDocumentOrder.addEventListener('change', () => {
  document.getElementById('page_one').style.display = 'none';
  document.getElementById('page_four').style.display = 'block';

  const yearOrder = injuries.sortData(newData, event.target.value);
  const yearOrderzero = injuries.nulltozero(yearOrder);
  listitems(yearOrderzero, orderYear);
});

// Función para realizar la suma total de personas heridas

selectDocumentCalculo.addEventListener('change', () => {
  document.getElementById('page_one').style.display = 'none';
  document.getElementById('page_five').style.display = 'block';
  
  const injuriesTotal = injuries.filterData(newData, event.target.value);
  const computeStatsDataSum = injuries.computeStats(injuriesTotal);
  tableCalculate(computeStatsDataSum, viewYearsCol);
  computeStatsTotal.innerHTML = computeStatsDataSum;
});
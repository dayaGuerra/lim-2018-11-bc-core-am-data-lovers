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
const btnMostrarAños = document.getElementById('btn_mostrar_años');

// DOM para mostrar data en pantalla
const filterForYear = document.getElementById('filter_years');
const filterForRang = document.getElementById('filter_rang');

// Data del archivo data.js

/* Copia de la data Original*/
const newData = window.cambiarPropiedad(INJURIES); // array de objetoos
const years = window.filtrarPropiedadEspecifica(newData, 'Year');

// Funcion para mostrar cartas solo con los valores de la propiedad Year
const listarItems = (obje, dive) => {
  let cadena = '';
  
  obje.forEach((obj) => { 
    cadena += `<div class = "card-year">
    <article class = "prop-year">
     <h2 class = "filter-year">${obj.Year}</h2>
     <div/>
         <div class = "group"> General por año: <span class="info"> ${obj.Total_Injured_Persons + (0)}</span></div>
         <div class = "group"> En aire:<span class="info"> ${obj.Total_Injured_Persons_Air + (0)}</span></div>
         <div class = "group"> Ocupantes de bus: <span class="info">${obj.Total_Injured_Persons_Bus_Occupants + (0)}</span></div>
         <div class = "group"> Personas lesionadas en carretera:<span class="info"> ${obj.Total_Injured_Persons_Highway + (0)}</span></div>
         <div class = "group"> En motocicleta:<span class="info"> ${obj.Total_Injured_Persons_Motorcyclists + (0)}</span></div>
         <div class = "group"> Ocupantes en automóviles:<span class="info"> ${obj.Total_Injured_Persons_Passenger_Car_Occupants + (0)}</span></div>
         <div class = "group"> Pasajeros de automóviles:<span class="info"> ${obj.Total_Injured_Persons_Passenger_Or_Occupant + (0)}</span></div>
         <div class = "group"> Peatones heridos:<span class="info">${obj.Total_Injured_Persons_Pedestrians + (0)}</span></div>
         <div class = "group"> Personas lesionadas en aerolíneas de EEUU: <span class="info">${obj.Total_Injured_Persons_US_Air_Carrier + (0)}</span></div>
     </div>
     </article>
 </div>
    `;
  });
  dive.innerHTML = cadena;
};


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
  const result = window.filtro(newData, (parseInt(event.target.value)));
  result.innerHTML = listarItems(result, filterForYear);
}); 

 
btnMostrarAños.addEventListener('click', () => {
  document.getElementById('page_one').style.display = 'none';
  const minYear = selectDocumentMinYear.value;
  const maxYear = selectDocumentMaxYear.value;
  
  const respt = window.filtroMinMax(newData, minYear, maxYear);
  respt.innerHTML = listarItems(respt, filterForRang);
});

selectDocumentMinYear.innerHTML = mostrarCasillasEnSelect(years);
selectDocumentMaxYear.innerHTML = mostrarCasillasEnSelect(years);


// function myFunction() {
//   let input, filter, ul, li, a, i;
//   input = document.getElementById('mysearch');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById('myul');
//   li = ul.getElementsByTagName('li');
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName('a')[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = '';
//     } else {
//       li[i].style.display = 'none';
//     }
//   }
// }



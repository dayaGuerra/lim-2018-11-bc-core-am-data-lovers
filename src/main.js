const newData = cambiarPropiedad(INJURIES);
const selectDocument = document.getElementById('select_year');
const year = filtrarPropiedadEspecifica(newData, 'Year');
const functionMain = () => {
  const selectA = [];
  let dataSelect = '';
  // console.log(Year);
  year.forEach(element => { 
    selectA.push(`<option value = "${element}">${element}</option>`);
  });
  dataSelect = selectA.join('');
  // console.log(dataSelect);
  selectDocument.innerHTML = dataSelect;
  return dataSelect;
};
functionMain();
selectDocument.addEventListener('change', () => {
  const kl = selectDocument.options[selectDocument.selectedIndex].value; const nj = recib(newData, kl);
  console.log (nj);
});


//TEMPLATES DE AÑOS

const containerList = document.getElementById ("container-list")

const tempYear = (list) => {
    let templateListYears = "";
    list.forEach((newData) => {
        const blockYear = `
        <div class = "card-year">
           <article class = "prop-year">
            <h2 class = "filter-year">${newData.Year}</h2>
            <div class = "total-heridos-por-año"/>
                <div> General por año: <span class="info"> ${newData.Total_Injured_Persons}</span></div>
                <div> En aire: ${newData.Total_Injured_Persons_Air}</div>
                <div> Ocupantes de bus: ${newData.Total_Injured_Persons_Bus_Occupants}</div>
                <div> Personas lesionadas en carretera: ${newData.Total_Injured_Persons_Highwayr}</div>
                <div> En motocicleta: ${newData.Total_Injured_Persons_Motorcyclists}</div>
                <div> Ocupantes en automóviles: ${newData.Total_Injured_Persons_Passenger_Car_Occupants}</div>
                <div> Pasajeros de automóviles: ${newData.Total_Injured_Persons_Passenger_Or_Occupant}</div>
                <div> Peatones heridos: ${newData.Total_Injured_Persons_Pedestrians}</div>
                <div> Personas lesionadas en aerolíneas de EEUU: ${newData.Total_Injured_Persons_US_Air_Carrier}</div>    
            </div>
            </article>
        </div>
        `;
        templateListYears += blockYear;
    });
    containerList.innerHTML = templateListYears;
}

tempYear(newData);

const data = INJURIES;
const elemento = document.getElementById("root");
const airFilter = document.getElementById("air");


//Urban
function getFullName(item) {
const fullname = [item.Year, item.Total_Injured_Persons].join(" | ");
return fullname;
}
const vg =data.map(getFullName);
for(let i = 0; i < vg.length; i++){
elemento.innerHTML += `<li>Año: ${vg[i]}</li><br>`};


//Carretera
function jojo(item,index) {
const fullname = [item.Year, item.Total_Injured_Persons_Air].join(" | ");
return fullname;
}
const airmostrar = document.getElementById("air");
const vig =data.map(jojo);
for(let i = 0; i < vig.length; i++){
airmostrar.innerHTML += `<li>Año: ${vig[i]}</li><br>`};

/*

//Aire
function jojo(item,index) {
const fullname = [item.Year, item.Total_Injured_Persons_Air].join(" | ");
return fullname;
}
const airmostrar = document.getElementById("air");
const vig =data.map(jojo);
for(let i = 0; i < vig.length; i++){
airmostrar.innerHTML += `<li>Año: ${vig[i]}</li><br>`};


//Ferrocarril
function jojo(item,index) {
const fullname = [item.Year, item.Total_Injured_Persons_Air].join(" | ");
return fullname;
}
const airmostrar = document.getElementById("air");
const vig =data.map(jojo);
for(let i = 0; i < vig.length; i++){
airmostrar.innerHTML += `<li>Año: ${vig[i]}</li><br>`};



//Agua
function jojo(item,index) {
const fullname = [item.Year, item.Total_Injured_Persons_Air].join(" | ");
return fullname;
}
const airmostrar = document.getElementById("air");
const vig =data.map(jojo);
for(let i = 0; i < vig.length; i++){
airmostrar.innerHTML += `<li>Año: ${vig[i]}</li><br>`};



//Peaton
function jojo(item,index) {
const fullname = [item.Year, item.Total_Injured_Persons_Air].join(" | ");
return fullname;
}
const airmostrar = document.getElementById("air");
const vig =data.map(jojo);
for(let i = 0; i < vig.length; i++){
airmostrar.innerHTML += `<li>Año: ${vig[i]}</li><br>`};



//Falla Tecnica
function jojo(item,index) {
const fullname = [item.Year, item.Total_Injured_Persons_Air].join(" | ");
return fullname;
}
const airmostrar = document.getElementById("air");
const vig =data.map(jojo);
for(let i = 0; i < vig.length; i++){
airmostrar.innerHTML += `<li>Año: ${vig[i]}</li><br>`};



//Laboral
function jojo(item,index) {
const fullname = [item.Year, item.Total_Injured_Persons_Air].join(" | ");
return fullname;
}
const airmostrar = document.getElementById("air");
const vig =data.map(jojo);
for(let i = 0; i < vig.length; i++){
airmostrar.innerHTML += `<li>Año: ${vig[i]}</li><br>`};



//Otros Accidentes
function jojo(item,index) {
const fullname = [item.Year, item.Total_Injured_Persons_Air].join(" | ");
return fullname;
}
const airmostrar = document.getElementById("air");
const vig =data.map(jojo);
for(let i = 0; i < vig.length; i++){
airmostrar.innerHTML += `<li>Año: ${vig[i]}</li><br>`};


*/






window.INJURIES = INJURIES;

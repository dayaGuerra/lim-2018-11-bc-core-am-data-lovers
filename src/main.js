/* eslint-disable no-undef */
/* eslint-disable no-unused-vars 
// 
// const main = document.getElementById('main');
// eslint-disable-next-line no-undef
const newData = cambiarPropiedad(INJURIES);
// console.log(newData);
console.log(filtroUrbano(newData, 'Year'));*/
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
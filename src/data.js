// Copiar el objeto y cambiar los años a number antes : {Year: '1960-01-04'} / después : {Year: 1960}
const cambiarPropiedad = (data) => { 
  return data.map(obj => Object.assign({}, obj, { Year: (new Date(obj.Year).getFullYear())}));
};
console.log(cambiarPropiedad(INJURIES));
console.log(INJURIES)


// Funcion que toma propiedades especificas.
const filtrarPropiedadEspecifica = (data, propiedad) => {
  const newArr = data.map((obj) => {
    return obj[propiedad];
  });
  return newArr;
};


// Muestra los datos del año seleccionado - requisito 1
const filtro = (data, inputUser) => {
  return data.filter((ele) => {
    return ele.Year === parseInt(inputUser);
  });
};


const filtroMinMax = (data, inputUser1, inputUser2) => {
  return data.filter((ele) => {
    return ele.Year >= parseInt(inputUser1) && ele.Year <= parseInt(inputUser2);
  });
};
// funcion reduce
const calcular = (data) => {
  const arrCa = data.reduce((total, num) => {

    return total + num;
  }, 0);
  return arrCa;
};

window.injuries = {
  cambiarPropiedad,
  filtrarPropiedadEspecifica,
  filtrarPropiedad,
  filtro,
  filtroMinMax,  
  calcular,
};
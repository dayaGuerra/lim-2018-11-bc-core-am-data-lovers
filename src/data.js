
// Copiar el objeto y cambiar los años a number antes : {Year: '1960-01-04'} / después : {Year: 1960}
const cambiarPropiedad = (data) => { 
  return data.map(obj => Object.assign({}, obj, { Year: (new Date(obj.Year).getFullYear())}));
};

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

window.injuries = {
  
  cambiarPropiedad,
  filtrarPropiedadEspecifica,
  filtro,
  
};

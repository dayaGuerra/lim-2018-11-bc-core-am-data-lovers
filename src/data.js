// [1960,1965,1970]
// colocar en un select o como opciones de busqueda en el select.
// meter en un input?
// Copia de objeto con los años number {Year: 1960}
const cambiarPropiedad = (data) => { 
    return data.map(obj => Object.assign({}, obj, {Year: (new Date(obj.Year).getFullYear())}));
  };
  // Crear una funcion que tome propiedades especificas.
  const filtrarPropiedadEspecifica = (data, propiedad) => {
    const newArr = data.map((obj) => {
      return obj[propiedad];
    });
    return newArr;
  };
  // filtrar Años dentro de un select - requisiito 1
  const recib = (data, inputUs) => {
    return data.filter((ele) => {
      return ele.Year === parseInt(inputUs);
    });
  };
  // filtrar Años dentro de un select - requisito 2
  window.injuries = {
    
    cambiarPropiedad,
    filtrarPropiedadEspecifica,
    recib,
    
  };
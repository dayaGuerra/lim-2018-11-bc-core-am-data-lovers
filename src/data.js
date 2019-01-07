// Copiar el objeto y cambiar los años a number antes : {Year: '1960-01-04'} / después : {Year: 1960}
const changeProperty = (data) => { 
  return data.map(obj => Object.assign({}, obj, { Year: (new Date(obj.Year).getFullYear())}));
};

// Funcion que toma propiedades especificas.
const filterData = (data, propiedad) => {
  const newArr = data.map((obj) => {
    return obj[propiedad];
  });
  return newArr;
};

// Muestra los datos del año seleccionado - requisito 1
const strainer = (data, inputUser) => {
  return data.filter((ele) => {
    return ele.Year === parseInt(inputUser);
  });
};

// Filtra un rango de años con el cual puede interactuar el usuario
const filterMinMax = (data, inputUser1, inputUser2) => {
  return data.filter((ele) => {
    return ele.Year >= parseInt(inputUser1) && ele.Year <= parseInt(inputUser2);
  });
};


// funcion reduce, suma el total de personas heridas.
const computeStats = (data) => {
  const arrCalculate = data.reduce((total, num) => {
    return total + num;
  }, 0);
  return arrCalculate;
};

// Función ordenar por año de forma ascendente y descentente

const sortData = (data, inputUser) => {
  const data2 = data.slice(0, data.lenght);
  data2.sort((year1, year2) => {
    if (year1.Year > year2.Year) {
      return 1;
    }
    if (year1.Year < year2.Year) {
      return -1;
    }
    return 0;
  });
  if (inputUser === 'falling') {
    data2.reverse();
  }
  return data2;
};

// Convertir datos null a 0
const nulltozero = (data) => { 
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

// Arreglo de dos datos para tabla de gráfico
const arrOfArrFunction = (data, property1, property2) => {
  const newArrOfArr = data.map((obj) => {
    return [obj[property1].toString(), obj[property2]];
  });
  return newArrOfArr;
};

window.injuries = {
  changeProperty,
  filterData,
  strainer,
  filterMinMax,
  computeStats,
  sortData,
  nulltozero,
  arrOfArrFunction,
};
require('../src/data.js');

const input = [{Year: '1960-01-04'}, {Year: '1965-01-04'}, {Year: '1970-01-04'}];
const output1 = [{Year: 1960}, {Year: 1965}, {Year: 1970}];
const output2 = [1960, 1965, 1970];


describe('injuries', () => {
  it('debería de ser un objeto', () => {
    expect(typeof injuries).toBe('object');
  });

  describe('injuries.cambiarPropiedad', () => {
    it('deberia de ser una funcion', () => {
      expect(typeof injuries.cambiarPropiedad).toBe('function');
    });
    it('debería de retornar un nuevo objeto con los años modificados a number', () => {
      expect(injuries.cambiarPropiedad(input)).toEqual(output1);
    });
    it('Debería retornar un nuevo array, no debe de cambiar el array original', () => {
      expect(injuries.cambiarPropiedad(input)).not.toEqual(input);
    });
  });
  
  describe('injuries.filtrarPropiedadEspecifica', () => {
    it('debería de ser una función', () => {
      expect(typeof injuries.filtrarPropiedadEspecifica).toBe('function');
    });
    it('debería de retornar un array con los datos requeridos', () => {
      expect(injuries.filtrarPropiedadEspecifica(output1, 'Year')).toEqual(output2);
    });
  });
});


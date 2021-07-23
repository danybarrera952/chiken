const isRequired = function () {
  throw new Error('Missing parameter');
};

const palindromo = (text = isRequired()) => {
  //evaluar que sea un string
  if (typeof text !== 'string') return console.log('no es un string');
  //evaluar que no tenga espacios
  if (text.trim().indexOf(' ') != -1)
    return console.log(
      'el texto no debe tener espacios y tiene que ser solo una palabr'
    );
  //funcion que corrige los espacios
  /* console.log(text.replace(/\s+/g, '')); */

  let resultado = false;
  //con la funcion split  creamos un array con cada string y lo  recorremos al reves y despues lo unimos con join
  let textReverse = text.split('').reverse().join('');
  //comparemos el texto original con el reverse y si es 0 es un palidrmo
  return text.localeCompare(textReverse) === 0;
};
console.log('Es un palindromo?', palindromo('otto'));

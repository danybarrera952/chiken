function invertir(text) {
  //si se puede recorrer un string
  let textinvertir = '';
  let resultado = '';
  for (let i = text.length - 1; i >= 0; i--) {
    textinvertir += text[i];
  }
  //otra solucion
  // for (let letra of text){
  //   resultado = letra + resultado
  // }

  return textinvertir;
}

console.log(invertir('hola'));

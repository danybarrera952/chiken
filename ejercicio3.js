function concidencias(frase, palabra) {
  let convertTexttoLowerCase = '';
  let convertpalabratolowerCase = '';
  let arrayFrase = [];
  let count = 0;
  //expresion regular
  convertTexttoLowerCase = frase.toLowerCase().replace(/[!,.-]/g, '');

  convertpalabratolowerCase = palabra.toLowerCase();

  if (!convertTexttoLowerCase.includes(convertpalabratolowerCase))
    return `Cero concidencias para esa palabras`;
  //Hacer array de palabras
  arrayFrase = convertTexttoLowerCase.split(' ');

  for (let i = 0; i <= arrayFrase.length; i++) {
    if (arrayFrase[i] === convertpalabratolowerCase) {
      count = count + 1;
    }
  }
  return `La palabra: ${convertpalabratolowerCase} se encontro ${count} veces en la frase: ${convertTexttoLowerCase}`;
}

console.log(
  concidencias(
    'Vamos rayados, vamos. RaYADOS vamos vamos abuela!!....',
    'vamos'
  )
);

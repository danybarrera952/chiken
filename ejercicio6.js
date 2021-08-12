function lado(num) {
  let asterisco = '*';
  let lado = '';

  for (let i = 1; i <= num; i++) {
    lado += asterisco;
  }
  return lado;
}

function cuadrado(num) {
  let dibujo = lado(num) + '\n';
  let contenido = '';

  for (let i = 0; i < num - 2; i++) {
    contenido = '*';

    for (let x = 0; x < num - 2; x++) {
      contenido += ' ';
    }
    contenido += '*';
    dibujo += contenido + '\n';
  }
  dibujo += lado(num);
  return dibujo;
}

console.log(cuadrado(4));

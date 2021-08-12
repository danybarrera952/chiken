function numInvertido(num) {
  let Stringnum = String(num).split('').reverse().join('');
  let Intnum = Number(Stringnum);
  if (num <= 10)
    return console.log('el numero que introduciste debe ser mayor a 10 ');

  if (Stringnum.split('')[0] === '0')
    return console.log('el numero no se puede invertir por que termina en 0 ');

  return Intnum;
}
console.log(numInvertido(32520));

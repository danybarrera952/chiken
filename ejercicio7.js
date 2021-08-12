function contadorNumerosImpares(num1, num2) {
  let count = 0;

  if (num1 > num2)
    return console.log('el primer parametro debe ser menor al segundo');

  for (let i = num1; i <= num2; i++) {
    const operacion = i % 2;
    if (operacion !== 0) count += 1;
  }
  return count;
}

console.log(contadorNumerosImpares(1, 100));

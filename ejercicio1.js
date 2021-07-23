function multipilicar(number) {
  let result = `tabla de multiplicar del ${number} \n`;

  for (let i = 1; i <= 10; i++) {
    const multiplicar = i * number;
    result += `${i} X ${number} = ${multiplicar} \n`;
  }
  //retornamos el valor
  return result;
}
console.log(multipilicar(9));

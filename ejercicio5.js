function numporciento(percentaje, num) {
  let operacion = (percentaje / 100) * num;
  return `El ${percentaje}% de ${num} es el ${operacion}%`;
}

console.log(numporciento(43, 897));

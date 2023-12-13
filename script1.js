document.write("<h1>Lista de numeros primos menores a 100</h1>");
function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero > 1;
}

for (let i = 2; i < 100; i++) {
  if (esPrimo(i)) {
    document.write(i);
  }
}

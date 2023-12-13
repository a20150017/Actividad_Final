var cantidadElementos = parseInt(prompt("Ingresa la cantidad de elementos: "));
var arreglo = [];

for (let i = 0; i < cantidadElementos; i++) {
  let elemento = prompt("Ingresa el elemento #" + (i + 1) + ": ");
  arreglo.push(elemento);
}

console.log("Los elementos del array son:");
arreglo.forEach(elemento => {
  console.log(elemento);
});

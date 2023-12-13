document.write("<h1>Crear array con prompts</h1>");
let familia = [];
for (let i = 0; i < 4; i++) {
  let nombre = prompt("Ingresa un familiar: ");
  familia.push(nombre);
}
console.log(familia);

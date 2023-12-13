document.write("<h1>Menú:</h1>");
document.write("<p>a. Responsabilidad</p>");
document.write("<p>b. Respeto</p>");
document.write("<p>c. Solidaridad</p>");
document.write("<p>d. Minoridad</p>");
document.write("<p>e. Terminar</p>");

do {
  opc = prompt("Ingresar la opcion: ");
  if (opc === "a") {
    console.log("Hacerse cargo");
  } else if (opc === "b") {
    console.log("Buen trato");
  } else if (opc === "c") {
    console.log("Pienso en los demas");
  } else if (opc === "d") {
    console.log("Servicio a los demas");
  } else if (opc === "e") {
    break
  } else {
    console.log("Opcion incorrecta, intente de nuevo.");
  }
} while (frase !== "e");

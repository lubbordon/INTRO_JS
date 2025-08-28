//Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que ingrese dos valores booleanos (true o false) y muestra el resultado de diversas combinaciones lógicas.
const prompt = require("prompt-sync")();
let condicion1;
let condicion2;
condicion1 = prompt("Ingrese un valor booleano (true o false) para la primera condición: ");
condicion2 = prompt("Ingrese un valor booleano (true o false) para la segunda condición: ");

if(condicion1 === condicion2) {
    console.log ("Ambas condiciones son iguales:")
}
else{
    console.log("Las condiciones son distintas")
}
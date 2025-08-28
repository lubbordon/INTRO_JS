//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.
const prompt = require('prompt-sync')();
const RANGO_MINIMO = 5
const RANGO_MAXIMO = 100

let numero = parseInt(prompt("Ingrese un número: "))

if(numero>=5 && numero<=100){
    console.log("El número elegido por usted se encuentra dentro de los rangos definidos")
}
else{
    console.log("El número elegido por usted no se encuentra dentro de los rangos definidos")
}
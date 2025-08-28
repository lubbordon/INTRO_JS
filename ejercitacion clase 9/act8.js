//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)

const prompt = require("prompt-sync")();
let ladoA = parseFloat(prompt("Ingresa la Longitud del lado A del triángulo: "));
let ladoB = parseFloat(prompt("Ingresa la Longitud del lado B del triángulo: "));
let ladoC = parseFloat(prompt("Ingresa la Longitud del lado C del triángulo: "));

let resultado = ladoA + ladoB + ladoC
if (resultado != 180){
    console.log("La suma de los 3 lados debe ser igual a 180, ingrese nuevamente")
    return
}
if(ladoA == ladoB && ladoA == ladoC){
    console.log("El triángulo es Equilátero")
}
else if(ladoA == ladoB && ladoA != ladoC || ladoA !=ladoB && ladoA == ladoC || ladoC == ladoB && ladoA != ladoC ){
    console.log("El triángulo es Isósceles")
}
else {
    console.log("El triángulo es Escaleno")
}
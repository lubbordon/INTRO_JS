//Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI.

const prompt = require("prompt-sync")();
const pi = 3.14159
let radio = parseInt(prompt("Ingrese el radio del círculo: "))

let perimetro = 2*pi*radio
let area = pi * radio*radio
 console.log("El perímetro del círculo es: ",perimetro)
 console.log("El área del círculo es: ",area)

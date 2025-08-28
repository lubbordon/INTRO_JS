//Escribe un programa que: Pida al usuario que ingrese dos números.Sume ambos números. Muestre el resultado de la suma.
const prompt = require('prompt-sync')()
let numero1 = parseFloat(prompt("Ingrese el primer número: "))
let numero2 = parseFloat(prompt("Ingrese el segundo número: "))
let suma = numero1 + numero2
console.log("El resultado de la suma de ambos números es:", suma)
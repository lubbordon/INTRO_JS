//En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes escribir un programa en JavaScript que:Solicite al usuario que ingrese un número; cualquiera. Calcule el doble de ese número.Muestre el resultado en la consola.

const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número:"))
let doble = numero*2
console.log("El doble del número que usted ha ingresado es:", doble)
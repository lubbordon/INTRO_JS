// Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número: "))
console.log("Su tabla de multiplicar es la sig: ")
for( let num= 1; num<=10; num++){
    console.log(numero + "x" + num,"=" , + (numero*num))

}
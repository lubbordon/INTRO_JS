// Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos

const prompt = require('prompt-sync')();
let numeroi = parseInt(prompt("Ingrese el número inicial: "))
let numerof = parseInt(prompt("Ingrese el número final: "))
if (numerof< numeroi){
    console.log("Valores inválidos. El número inicial debe ser menor que el número final")
}

for( let recorrido = numeroi; recorrido <=numerof; recorrido++){
    if(recorrido %2===0)
    console.log(" RECORREMOS " + recorrido)
}
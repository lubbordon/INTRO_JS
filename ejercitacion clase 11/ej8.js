// Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.

const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número positivo: "))

if(numero<0){
    console.log("Debe ingresar un número positivo")
    return;
}
console.log("Los múltiplos del siguiente número son: ");
for(let num = 1; num <= 100; num++){
    if(numero % 2===0){
        console.log(num)
    }

} 
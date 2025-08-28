//Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres.
const prompt = require('prompt-sync')();
let numero1 = parseInt(prompt("Ingrese el primer número: "))
let numero2 = parseInt(prompt("Ingrese el segundo número: "))
let numero3 = parseInt(prompt("Ingrese el tercer número: "))

if(numero1>numero2 && numero1>numero3){
    console.log("El número ", numero1, "es el mayor de los tres números ingresados")
}
else if(numero2>numero1 && numero2>numero3){
    console.log("El número ", numero2, "es el mayor de los tres números ingresados")
}
else {
    console.log("El número ", numero3, "es el mayor de los tres números ingresados")
}
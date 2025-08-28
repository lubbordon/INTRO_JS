//Solicite al usuario que ingrese un número entero.Determine si el número es par o impar.Muestre un mensaje indicando si el número es par o impar.
const prompt = require('prompt-sync')()
let numero = parseInt(prompt("Ingrese un número entero:"))
if(numero%2===0)
{console.log("El número elegido por usted es NUMERO PAR")}
else
{console.log("El número ingresado por usted es NUMERO IMPAR")}
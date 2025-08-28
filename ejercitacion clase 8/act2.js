//En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un programa en JavaScript que:
//Pida al usuario que ingrese un número.
//Verifique si el número es positivo, negativo o igual a cero.
//Muestre un mensaje indicando cuál es el caso.
const prompt = require('prompt-sync')()
let numero = parseFloat(prompt("Ingrese un número:"))
if(numero>0)
  {console.log("El número elegido por usted es POSITIVO")}
else if(numero<0)
  {console.log("El número elegido por usted es NEGATIVO")}
else
  {console.log("El número elegido por usted es igual a CERO")}

//Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si el nombre ingresado es igual a tu nombre.
const prompt = require("prompt-sync")();
let nombre = "Luciana"
let nombreusuario = prompt("Ingrese su nombre: ")
if(nombre == nombreusuario){
    console.log("Ambos nombres son iguales")
}
else{ 
    console.log("Ambos nombres son distintos")
}
    
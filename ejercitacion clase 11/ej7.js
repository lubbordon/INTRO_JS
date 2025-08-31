// Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.
const prompt = require('prompt-sync')();
let numeroi = parseInt(prompt("Ingrese el primer número: "))
let numerof = parseInt(prompt("Ingrese el segundo número: "))
let operación = (prompt("Ingrese la operación que desea realizar : suma, resta, división o multiplicación: "))
let resultado;
switch (operación) {
    case "suma":
        resultado = numeroi+numerof
        console.log("El resultado de la suma es: ", resultado)
        break;

    case "resta":
        resultado = numerof - numeroi
        console.log("El resultado de la resta es: ", resultado)
        break;
    case "division":
        resultado = numerof / numeroi
        console.log("El resultado de la división es: ", resultado)
        break;
    case "multiplicacion":
        resultado = numeroi*numerof
        console.log("El resultado de la multiplicación es: ", resultado)
        break

    default:
        console.log("Debe ingresar una de las opciones anteriores.")
        break;
}

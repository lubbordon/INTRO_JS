// Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. Usa un ciclo for para realizar la cuenta regresiva
const prompt = require('prompt-sync')();

for(let despegue=10; despegue >=0; despegue--){
    console.log("Cuenta regresiva del despegue!!", + despegue)
}

console.log("🚀 DESPEGUE!!!!!!")
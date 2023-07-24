//6

// let contador = 0
// while (contador <= 20) {
//     console.log(contador);
//     contador += 2
// }

//7
// let soma = 0
// let contador = 1

// while (contador <= 100) {
//     soma += contador 
//     contador ++
    
// }
// console.log(soma);

//8
// import PromptSync from "prompt-sync";
// let prompt = PromptSync();

// let idade
// do {
//     idade = prompt('Digite a sua idade: ')
// } while (idade < 18);
// console.log("Você é maior de idade!");

//9
import PromptSync from "prompt-sync";
let prompt = PromptSync();

let contador = prompt("Digite um número para receber a contagem regressiva: ")

while (contador > 0) {
    contador --
    console.log(contador);
}

//10
// const prompt = require('prompt-sync')()
// let numero;

// do {
//     numero = prompt('Digite um número: ')
// } while (numero != "0");
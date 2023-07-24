import PromptSync from "prompt-sync";

import { verificarMaioridade } from "./Exercicios.js";

const prompt = PromptSync();

//menu para escolher qual exercicio o usuario escolher

let exercicio;
let continuar;

do {
    exercicio = parseInt(prompt('Digite um número que represente um exercício de 1 a 4: '))
    switch (exercicio) {
        case 1:
            olamundo("Olá, Mundo!")  //chamando funçao olamundo
        case 2:
            //objeto chaves
            let aluno = {
                nome: 'Pricilios',
                idade: 40,
                hardSkills: ["Figma", "HTML", "CSS", "Web Responsive"]
            }
            console.log("Objeto aluno", aluno);
            console.log(aluno.nome, aluno.idade, aluno.hardSkills[3]);
        case 3:
            

            break;

        default:
            console.log("Digite um número de 1 a 4: ");
            break;
    }

    continuar = prompt('Deseja continuar? Digite "s" para SIM e "n" para NÃO: ')

} while (continuar.toLocaleLowerCase === "s"); //lowercase transforma o que foi preenchido em minusculo 

function olamundo(frase) {
    console.log(frase);
}

while (condition) {
    
}
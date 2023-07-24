import PromptSync from "prompt-sync";
let prompt = PromptSync();

import { ex1 } from "../Aula1/ResolucaoSegundaAula/ex1.js";
import { ex2 } from "../Aula1/ResolucaoSegundaAula/ex2.js";
import { ex3 } from "../Aula1/ResolucaoSegundaAula/ex3.js";
import { ex4 } from "../Aula1/ResolucaoSegundaAula/ex4.js";
import { ex5 } from "../Aula1/ResolucaoSegundaAula/ex5.js";
import { ex6 } from "../Aula1/ResolucaoSegundaAula/ex6.js";

let exercicio;
let continuar;

do {
    exercicio = parseInt(prompt('Digite um número que represente um exercício de 1 a 6: '));

    switch (exercicio) {
        case 1:
            ex1();
            break;

        case 2:
            ex2();
            break;

        case 3:
            ex3();
            break;

        case 4:
            ex4();
            break;

        case 5:
            ex5();
            break;

        case 6:
            ex6();
            break;

        default:
            break;
    }

    continuar = prompt("Deseja continuar? Digite 's' para sim e 'n' para não: ")

} while (continuar.toLocaleLowerCase() === "s");
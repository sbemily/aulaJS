//1
// for (let contador = 1; contador <= 10; contador++) {

//     console.log(contador);
    
//     }

//2
// for (let contador = 2; contador <= 10; contador += 2) {
//     console.log(contador);
    
// }

//3
// for (let contador = 1; contador < 50; contador += 2) {
//     console.log(contador);;
    
// }

//4
// for (let contador = 1; contador <= 10; contador++) {
//     console.log('3 X ' +contador+ "=" +contador*3);
    
// }

// let prompt = require('prompt-sync')()

// let numero = parseInt(prompt('Digite um número: '))

// for (let contador = 1; contador <= 10; contador++) {
   
//     console.log(numero +'X' +contador+ '=' + contador*numero);
// }

//5

let numAnterior = 0
let numAtual = 1

console.log(numAnterior);
console.log(numAtual);

for (let contador = 0; contador < 8; contador ++) {
        let proximoNum = numAnterior + numAtual;

        console.log(proximoNum);

        numAnterior = numAtual;
        numAtual = proximoNum;
        
}

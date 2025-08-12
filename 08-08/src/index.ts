//If e else
//porem em uma linha

let pontuacao:number = 85;

const resultado = pontuacao >= 60 ? "Aprovado" : "Reprovado";


console.log(resultado);


//switch case pereça
const fruta:string = "maçã";

switch (fruta) {
  case "banana":
    console.log("Banana é rica em potássio.");
    break;
  case "maçã":
    console.log("Maçã ajuda na digestão.");
    break;
  case "laranja":
    console.log("Laranja tem muita vitamina C.");
    break;
  default:
    console.log("Fruta desconhecida.");
}




//Menu bascio para trouxa usar

import * as readline from 'readline-sync';

console.log("===--| MENU PRINCIPAL |--===");
console.log("1 - Olá");
console.log("2 - Sobre");
console.log("3 - Sair");


const opcao = readline.question("Escolhe uma ai otario: ");

switch (opcao) {
    case "1":
        console.log("Ola kkk achou que ia ter oque?");
        break;
    case "2":
        console.log(`Isso e um menu sem proposito nenhum`);
        break;
    case "3":
        console.log("saiu 😎👍");
         break;
         default:
        console.log("Opcao inexistente😔");
                    
};

console.log(opcao);

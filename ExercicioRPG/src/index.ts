import { Monstro } from "./Monstro";
import { Personagem } from "./Personagem";
import * as readline from 'readline-sync';


const monstro: Monstro = new Monstro("Balrog", 120, 15);



let nome = readline.question(" digite o nome do seu perso: ")
let classe = readline.question("digite a classe do seu personagem: ")





function definirPerso(nome: string, classe: string) {
    return new Personagem(nome, classe, 100, 10);
};

const personagem = definirPerso(nome, classe);


let batalha = true;

while (batalha) {
    console.log("|------| menu test |-------");

    console.log(`1 --- Atacar`);
    console.log(`2 --- curar`);
    console.log(`3 --- Cheatizin de cria`);
    console.log(`4 --- fugir`);

    const opcao = readline.question("Escolha uma ai: ");

    switch (opcao) {

        case "1":
            personagem.atacarMonstro(monstro);
            console.log("---------------------");
            personagem.dano(monstro);
            console.log("---------------------");
            console.log(`Vida atual ${personagem.getVida()}`);
            console.log(`Vida total do ${monstro.getNome2()} é de: ${monstro.getVida2()}`);
            console.log("---------------------");

            break;
        case "2":
            personagem.curaCheat(40);
            break;

        case "3":
            personagem.setVida(1000000)
            personagem.setForca(10000)
            console.log("Bot");
            break;

        case "4":
            console.log("cagao");
            batalha = false;
            break;

        default:
            console.log("Opcao errada");
            break;
    }

    if (monstro.getVida2() <= 0) {
        console.log(`${monstro.getNome2()} morreu para o ${personagem.getNome()}`);
        batalha = false;
    } else if (personagem.getVida() <= 0) {
        console.log(`${personagem.getNome()} morreu para o ${monstro.getNome2()} com cheat de cura e perde`);
        batalha = false;

    };

};












//Importacoes:
import * as readline from 'readline-sync';
import { Abrigo } from "./Abrigo";

//Criando Classe  com um Array chamado de "abrigo"
export class SistemasAbrigo {
    public abrigo: Abrigo[] = [];


    //Construtor vazio
    constructor() {

    }


    //Funcao que cria um "abrigo" e coloca as informacoes no ARRAY ABRIGO
    cadastrarAbrigo(): void {
        console.log(`Insira dados Para cadastrar seu Abrigo: `);
        const abrigoNome = readline.question(`Insira o nome de seu abrigo: `);
        const abrigoCidade = readline.question(`Insira a cidade de seu abrigo: `);
        const abrigoEdereco = readline.question(`Insira o endereco de seu abrigo: `);
        const abrigoTelefone = readline.question(`insira o telefone de seu abrigo: `);
        const abrigoCapacidade = Number(readline.question(`Insira a capacidade de seu abrigo: `));
        const abrigoVagasOcupadas = Number(readline.question(`Insira quantos residentes tem em seu abrigo: `));


        const abrigoCadastrado = new Abrigo(abrigoNome, abrigoEdereco, abrigoCidade, abrigoTelefone, abrigoCapacidade, abrigoVagasOcupadas);
        this.abrigo.push(abrigoCadastrado); //pedindo e colocando no abrigo, as infromaçoes do usuario ao cadastrar abrigo
    };

    //Lista que mostra TODOS os abrigos e suas informacoes
    listarAbrigos(): void {
        for (const arrayZ of this.abrigo) {
            for (let i = 0; i < this.abrigo.length; i++) {
                console.log(`                                          `);
                console.log(`-----------------------------------------`);
                console.log(`CODE: ${i}`);
                console.log(`Nome: ${arrayZ.getNome()}`);
                console.log(`Cidade ${arrayZ.getCidade()}`);
                console.log(`Endereco: ${arrayZ.getEnedereco()}`);
                console.log(`Telefone: ${arrayZ.getTelefone()}`);
                console.log(`Capacidade Maxima: ${arrayZ.capacidade}`);
                console.log(`Vagas ocupadas: ${arrayZ.VagasOcupadas}`);
                console.log(`-----------------------------------------`);
                console.log(`                                         `);
            }
        }

    };


    //Criando uma funcao para listar abrigos pelo nome de uma cidade
    procurarAbrigo(): void {
        const pergutaAbrigo = readline.question(`Insira a cidade do abrigo que deseja achar: `);
        let procura = false; //inicia a busca com falso
        for (const arrayZ of this.abrigo) {
            if (pergutaAbrigo.toLowerCase() === arrayZ.getCidade().toLowerCase()) {
                for (let i = 0; i < this.abrigo.length; i++) {
                    console.log(`                                          `);
                    console.log(`Abrigo na cidade de: ${arrayZ.getCidade()}`);
                    console.log(`-----------------------------------------`);
                    console.log(`CODE: ${i}`);
                    console.log(`Nome: ${arrayZ.getNome()}`);
                    console.log(`Endereco: ${arrayZ.getEnedereco()}`);
                    console.log(`Telefone: ${arrayZ.getTelefone()}`);
                    console.log(`Capacidade Maxima: ${arrayZ.capacidade}`);
                    console.log(`Vagas ocupadas: ${arrayZ.VagasOcupadas}`);
                    console.log(`As vagas Disponiveis: ${arrayZ.capacidade - arrayZ.VagasOcupadas}  `);
                    console.log(`-----------------------------------------`);
                    console.log(`                                         `);
                    procura = true;//se existir uma abrigo na cidade entao true

                }

            };
            //se nao econtrar nenhum abrigo na cidade exibe uma mensagem de aviso
        } if (!procura) { //inverte o valor da condicao, se o valor da condicao apos inverter, for igual a true, retorna um aviso

            console.log(`Nao existe abrigo registrado em: ${pergutaAbrigo}`);
        };
    };
};




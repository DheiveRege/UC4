
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
        this.abrigo.push(abrigoCadastrado);  //pedindo e colocando no abrigo, as infromaçoes do usuario ao cadastrar abrigo

    };



    //Lista que mostra TODOS os abrigos e suas informacoes
    listarAbrigos(): void {
        let semOuCom: boolean = true;
        for (let i = 0; i < this.abrigo.length; i++) {
            console.log(`                                          `);
            console.log(`-----------------------------------------`);
            console.log(`CODE: ${i}`);
            console.log(`Nome: ${this.abrigo[i].getNome()}`);
            console.log(`Cidade ${this.abrigo[i].getCidade()}`);
            console.log(`Endereco: ${this.abrigo[i].getEnedereco()}`);
            console.log(`Telefone: ${this.abrigo[i].getTelefone()}`);
            console.log(`Capacidade Maxima: ${this.abrigo[i].capacidade}`);
            console.log(`Vagas ocupadas: ${this.abrigo[i].VagasOcupadas}`);
            console.log(`Vagas Disponiveis: ${this.abrigo[i].capacidade - this.abrigo[i].VagasOcupadas} `);
            console.log(`-----------------------------------------`);
            console.log(`                                         `);
            semOuCom = false;
        };
        if (semOuCom === true) {
            console.log(`Nao existe abrigo registrado kkk`);

        };


    };


    //Criando uma funcao para listar abrigos pelo nome de uma cidade
    procurarAbrigo(): void {
        const pergutaAbrigo = readline.question(`Insira a cidade do abrigo que deseja achar: `);
        let procura = false; //inicia a busca com falso
        for (let i = 0; i < this.abrigo.length; i++) {
            if (pergutaAbrigo.toLowerCase() === this.abrigo[i].getCidade().toLowerCase()) {
                console.log(`                                          `);
                console.log(`Abrigo na cidade de: ${this.abrigo[i].getCidade()}`);
                console.log(`-----------------------------------------`);
                console.log(`CODE Cidade: ${i}`);
                console.log(`Nome: ${this.abrigo[i].getNome()}`);
                console.log(`Endereco: ${this.abrigo[i].getEnedereco()}`);
                console.log(`Telefone: ${this.abrigo[i].getTelefone()}`);
                console.log(`Capacidade Maxima: ${this.abrigo[i].capacidade}`);
                console.log(`Vagas ocupadas: ${this.abrigo[i].VagasOcupadas}`);
                console.log(`As vagas Disponiveis: ${this.abrigo[i].capacidade - this.abrigo[i].VagasOcupadas} `);
                console.log(`-----------------------------------------`);
                console.log(`                                         `);
                procura = true;//se existir uma abrigo na cidade entao true



            };
            //se nao econtrar nenhum abrigo na cidade exibe uma mensagem de aviso
        } if (!procura) { //inverte o valor da condicao, se o valor da condicao apos inverter, for igual a true, retorna um aviso

            console.log(`Nao existe abrigo registrado em: ${pergutaAbrigo}`);
        };
    };



            //exluiu um abrigo kkk 
         excluirAbrigo(){
            for(let i = 0; i < this.abrigo.length; i++)
            this.abrigo.splice(i);
            console.log(`Abrigos excluido KKKK`);
            
            
    }

};






        

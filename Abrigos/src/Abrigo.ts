//Importacoes:
import { Local } from "./Local";

//criando classe "Filha" de Local:
export class Abrigo extends Local {
    capacidade: number;
    VagasOcupadas: number;

    //Criando o construtor
    constructor(nome: string, endereco: string, cidade: string, telefone: string, capacidade: number, vagasOcupadas: number) {
        super(nome, endereco, cidade, telefone);
        this.capacidade = capacidade;
        this.VagasOcupadas = vagasOcupadas;
    };


    //Funcao que mostra a iformacoes de um ABRIGO ao ser chamada!
    mostarInfo(): void {
        console.log(`Nome: ${this.nome}\nEndereço: ${this.cidade}\nCidade: ${this.endereco}\nTelefone: ${this.telefone} \nCapacidade:${this.capacidade}\nVagas Ocupadas${this.VagasOcupadas}`);
    };


    //Funcao cirada para "ocupar vagas" soma as vagasOcupadas com valor e mostra resultado ao ser chamada
    ocuparVaga(valor: number): void {
        this.VagasOcupadas += valor
        console.log(`Voce se registrou, agora a quantidade de vagas ocupadas sao de: ${this.VagasOcupadas}`);
    };

    //Funcao para "Mostrar vagas disponiveis" subitrai vagasOcupadas com a capacidade, e mostra vagas disponiveis de um ABRIGO ao ser chamada
    vagasDisponiveis(): void {
        const disponiveis = this.capacidade -= this.VagasOcupadas

        console.log(`Vagas disponiveis sao: ${disponiveis}\nVagas ocupadas! ${this.VagasOcupadas}`);
    };

};





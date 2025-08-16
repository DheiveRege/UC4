import { Pacote } from "./Pacote";

export class Entregador {
    private nome: string;



    constructor(nome: string) {
        this.nome = nome
    }
    //metodo que recebe um objeto de tipo pacote
    entregarPacote(pacote: Pacote): void {
        console.log(`O ${this.nome} esta entregando um pacote de ${pacote.getPeso()} kg para ${pacote.getDestino()}`);

    }
    // metodo de  kkkk cansei de copiar
    trocarEndereco(pacote: Pacote, novoDestino:string): void {
        console.log(`O novo endereco sera ${pacote.setDestino(novoDestino)}`);
        

    }

    getNome(): string {
        return this.nome
    }

    setNome(novoNome: string): void {
        this.nome = novoNome
    }
}








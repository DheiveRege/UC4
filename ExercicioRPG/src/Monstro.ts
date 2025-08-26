import { Personagem } from "./Personagem";

export class Monstro {
    private nome: string;
    private vida: number;
    private forca: number;



    constructor(nome: string, vida: number, forca: number) {

        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }


    dano(oponente:Personagem):void {
        this.vida -= oponente.getForca()
        console.log(`O ${this.nome} recebeu ${oponente.getForca()} de dano de ${oponente.getNome()}`);
        if (this.vida <= 0){
            console.log(`${this.nome} morreu para o ${oponente.getNome()}`);
        }
    };

    atacarMonstro(oponente:Personagem) {
        oponente.dano(this)
        console.log(`O ${this.nome} causo ${this.forca} de dano no ${oponente.getNome()}`);
        
   

    };


    // definindo os GETS
    getNome2(): string {
        return this.nome;
    };


    getVida2(): number {
        return this.vida;
    };

    getForca2(): number {
        return this.forca;
    };
    // definindo os SETS
    setNome2(novoNome: string): void {
        this.nome = novoNome;
    };

    setVida2(novaVida: number): void {
        this.vida = novaVida;
    };

    setForca2(novaForca: number): void {
        this.forca = novaForca;
    };


};
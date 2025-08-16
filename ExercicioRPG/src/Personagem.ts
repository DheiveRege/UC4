import { Monstro } from "./Monstro";

export class Personagem {
    private nome: string;
    private classe: string;
    private vida: number;
    private forca: number;



    constructor(nome: string, classe: string, vida: number, forca: number) {

        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.forca = forca;
    };
    


    curaCheat(valor: number): void {
        if (this.vida <= 20) {
            this.vida = 100
        };
        console.log(`sua vida atual é: ${this.vida + valor}`);

    };

    dano(oponente:Monstro):void {
        this.vida -= oponente.getForca2()
        console.log(`O ${this.nome} recebeu ${oponente.getForca2()} de dano do ${oponente.getNome2()}`);
        if (this.vida <= 0){
            console.log(`${this.nome} morreu para o ${oponente.getNome2()}`);
        }
    };

    atacarMonstro(oponente:Monstro) {
        oponente.dano(this)
        console.log(`O ${this.nome} causo ${this.forca} de dano no ${oponente.getNome2()}`);

   

    };
    

 















    // definindo os GETS
    getNome(): string {
        return this.nome;
    };

    getClasse(): string {
        return this.classe;

    };

    getVida(): number {
        return this.vida;
    };

    getForca(): number {
        return this.forca;
    };
    // definindo os SETS
    setNome(novoNome: string): void {
        this.nome = novoNome;
    };
    setClasse(novaClasse: string): void {
        this.classe = novaClasse;
    };

    setVida(novaVida: number): void {
        this.vida = novaVida;
    };

    setForca(novaForca: number): void {
        this.forca = novaForca;
    };


}
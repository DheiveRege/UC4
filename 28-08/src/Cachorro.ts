import { IAnimal } from "./IAnimal";

export class Cachorro implements IAnimal {
    nome: string;
    peso: number;
    raca:string;


    constructor(nome: string, peso: number, raca:string) {
        this.nome = nome;
        this.peso = peso;
        this.raca = raca;
    };

    emitirSom(): void {
        console.log(`O ${this.nome} esta Latindo kkk `);
        
    };
    comer(): void {
        console.log(`O ${this.nome} esta se alimentando`);
        
    };
    
};
import { PrecoPizza } from "./PrecoPizza";
import { SaborPizza } from "./SaborPizza";
import { TamanhoPizza } from "./TamanhoPizza";
export class Pizza {
    sabor: SaborPizza;
    tamanho: TamanhoPizza;
    preco: PrecoPizza;
    constructor(sabor: SaborPizza, tamanho: TamanhoPizza) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco	= this.verificadorDePrecos()
    };
    verificadorDePrecos():PrecoPizza {
        if (this.tamanho === TamanhoPizza.gigantescoooooo) {
            return PrecoPizza.g;
        } else if (this.tamanho === TamanhoPizza.media) {
            return PrecoPizza.m
        } else {
           return PrecoPizza.p
}
    }
    descricao(): string {
        return `Pizza ${this.sabor} , Tamanho: ${this.tamanho}, Preco: ${this.preco}`;
    };


    mostarMenu(){
        
    }
};
import { Forma } from "./Forma";

export  class Triangulo extends Forma {
    base: number;
    altura: number;

    constructor(base: number, altura:number) {
        super();
        this.base = base;
        this.altura = altura;
    };

    clacularArea(): number {
        return (this.base * this.altura) / 2
    };
}
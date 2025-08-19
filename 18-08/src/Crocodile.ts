import { Animal } from "./Animal";

export class Crocodile extends Animal {


    constructor(name: string, weight: number) {
        super(name, weight);


    };
    swim(quantaty:number): void {
        console.log(`The ${this.name} swim ${quantaty} M`);

    };

}
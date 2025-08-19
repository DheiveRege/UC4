import { Animal } from "./Animal"

export class Owl extends Animal {


    constructor(name: string, weight: number) {
        super(name, weight);

    };



    fly(quantaty: number): void {

        console.log(`The ${this.name} Fly ${quantaty} M`);

    };
};
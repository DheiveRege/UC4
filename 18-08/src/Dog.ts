import { Animal } from "./Animal";


export class Dog extends Animal {

    constructor(name: string, weight: number) {
        super(name, weight)
    };


    bark():void {
        console.log(`The bostinha ${this.name} late demais`);

    }
}
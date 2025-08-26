import { Animal } from "./Animal";

export class Cachorro extends Animal {



    speak(): void {
        console.log(`o ${this.name} est alatindo`);
        
    }
}
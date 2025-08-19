export class Animal {
    name: string;
    weight: number;


    constructor(name: string, weight: number) {

        this.name = name;
        this.weight = weight;
    };


    eat(): void {
        console.log(`O ${this.name} is eating`);

    };

}
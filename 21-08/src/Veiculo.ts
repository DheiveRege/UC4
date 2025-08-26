export class Veiculo {
    name:string;


    constructor(name:string){
        this.name = name;
    };

    locomover():void {
        console.log(`O ${this.name} esta se locomovendo`);
        
    }
}
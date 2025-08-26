import { Veiculo } from "./Veiculo";


export class Carro extends Veiculo {
   

    constructor(modelo: string, velocidade: number) {
        super(modelo, velocidade);
   


    };

    acelerar(valor:number): void {
        this.velocidade += valor;
        console.log(`Velocidade atual do ${this.modelo} é ${this.velocidade} km/h`);
        
        
    }


}
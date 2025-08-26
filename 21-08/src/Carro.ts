import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {




    locomover(): void {
        console.log(`Voce esta dirigindo o ${this.name}`);
        
    };
}
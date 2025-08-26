import { Extension } from "typescript";
import { Veiculo } from "./Veiculo";

export class Bicicleta extends Veiculo {




    locomover(): void {
        console.log(`O ciclista esta pedalando com ${this.name}`);
        
    };
}
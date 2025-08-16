export class Pacote {
    private destino: string;
    private peso: number;


    constructor(destino: string, peso: number) {
        this.destino = destino;
        this.peso = peso;

    }
    
    getDestino():string {
        return this.destino
    }

    setDestino(novoDestino:string ):void {
         this.destino = novoDestino
    }


    getPeso():number {
        return this.peso
    }

    setPeso(novoPeso:number):void {
        this.peso = novoPeso
    }
}
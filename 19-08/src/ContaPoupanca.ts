import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {


    constructor(saldo: number) {
        super(saldo);

    };


    aplicarJuros(): void {
        const taxa = this.saldo * 0.10;
        this.atualizarSaldo(taxa)
        console.log(`O saldo é ${this.saldo}, O valor da taxa é de: ${taxa}`);


    };
};
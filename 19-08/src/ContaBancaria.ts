export class ContaBancaria {
    protected saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    };


    protected atualizarSaldo(incremento: number): void {
        this.saldo += incremento;
        console.log(`Seu saldo atual é de: ${this.saldo} R$`);

    };

}
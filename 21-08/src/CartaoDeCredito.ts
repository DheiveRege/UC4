import { Pagamento } from "./Pagamento";

export class CartaoDeCredito extends Pagamento {





    processar(): void {

        console.log(`Estamos processando esse pagamento via Cartao`);
    }

};

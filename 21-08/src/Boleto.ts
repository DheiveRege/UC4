import { Pagamento } from "./Pagamento";

export class Boleto extends Pagamento {



    processar(): void { 

        console.log(`Estamos processando seu seu pagemento via boleto`);

    };
}
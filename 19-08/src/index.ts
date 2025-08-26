import { Carro } from "./Carro";
import { ContaPoupanca } from "./ContaPoupanca";
import { Veiculo } from "./Veiculo";

let carrinho: Carro = new Carro("ford", 0);

carrinho.acelerar(10);

const myConta: ContaPoupanca = new ContaPoupanca(100)

console.log(myConta);
myConta.aplicarJuros();


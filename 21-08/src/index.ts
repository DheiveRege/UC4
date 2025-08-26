import { Bicicleta } from "./Bicicleta";
import { Boleto } from "./Boleto";
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";
import { CartaoDeCredito } from "./CartaoDeCredito";
import { Gato } from "./Gato";
import { Pagamento } from "./Pagamento";
import { Veiculo } from "./Veiculo";

const meuAnimal: Cachorro = new Cachorro("bob", 3);
const meuGato: Gato = new Gato("Sapeca", 3);

const vrum: Veiculo = new Veiculo("Veiculo123");
const bike: Bicicleta = new Bicicleta("Bike");
const carro: Carro = new Carro("Onix");

const boleto: Boleto = new Boleto();
const cartao: CartaoDeCredito = new CartaoDeCredito();


meuAnimal.speak();
meuGato.speak();

vrum.locomover();
bike.locomover();
carro.locomover();



boleto.processar();
cartao.processar();


console.log(`---------------| Testes For |------------------`);

const array: Pagamento[] = [cartao, boleto]

for (const abc of array) {
    abc.processar();

};
console.log(`---------------| Testes For |------------------`);

const arrayC: Veiculo[] = [bike, vrum, carro]

for (const dfg of arrayC) {
    dfg.locomover();
}







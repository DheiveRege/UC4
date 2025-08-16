import { Entregador } from "./Entregador";
import { Pessoa } from "./Pessoa";
import { Pacote } from "./Pacote";

const pessoa: Pessoa = new Pessoa("Dheive", 16, 179)

console.log(pessoa.apresentar());

console.log(pessoa.getNome()); // Dheive
pessoa.setNome("DHeiveRege");
console.log(pessoa.getNome());//  DheiveRege


console.log(pessoa.getIdade());
pessoa.setIdade(-3);
pessoa.setIdade(17);
console.log(pessoa.getIdade());

const pacote: Pacote =  new Pacote("Ruas dos codigos", 12.5);
const entregador : Entregador = new Entregador("DheiveCLThanos");

entregador.entregarPacote(pacote);
pacote.setDestino("lixao");
console.log(pacote.getDestino());


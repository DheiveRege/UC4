import { Desenhista } from "./Desenhista";
import { GerenciarEstoque } from "./GerenciarEstoque";
import { Mensageiro } from "./Mensageiro";
import { Repositorio } from "./Repositorio";

const me: Mensageiro = new Mensageiro();

me.enviar("dheive", "Ola dheive");
me.enviar(["dheive", "joao", "pedro"], "Ola,come estao?");

const em = new Desenhista();

em.desenhar(10);
em.desenhar(10,20);


const r = new Repositorio();
const u = r.buscar(1);     // retorna string
const lista = r.buscar("a"); // retorna string[]


const p = new GerenciarEstoque();

p.remover("Arroz");
p.remover(["Feijão","Arroz"])

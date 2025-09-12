import Estoque from "./Estoque";
import { Livro } from "./Livro";
import { Roupa } from "./Roupa";

let array: string[] = ["valsonabo", "lule"];
let array2: number[] = [1234, 0, 1];
let array3: boolean[] = [true, false];


function lerToos<olagoibadamorangococomelaoperamaça>(listar: olagoibadamorangococomelaoperamaça[]): olagoibadamorangococomelaoperamaça {
    return listar[0]
};


console.log(lerToos(array));
console.log(lerToos(array2));
console.log(lerToos(array3));


function mostraValor<T extends string | number>(valor: T): T {
    return valor;
}
mostraValor("Olá");  // ✅ string permitido
mostraValor(123);    // ✅ number permitido
//mostraValor(false);   // ❌ boolean não é aceito



interface TemNome {
    nome: string;
}

function mostraNome<T extends TemNome>(obj: T): string {
    return obj.nome;
}

mostraNome({ nome: "Ana" });             // ✅ ok
mostraNome({ nome: "João", idade: 20 }); // ✅ ok
//mostraNome({ idade: 20 });               // ❌ erro, não tem nome


class Animal {
    mover() {
        console.log("Movendo...");
    }
}

class Cachorro extends Animal {
    latir() {
        console.log("Au au!");
    }
}

function fazMover<T extends Animal>(animal: T) {
    animal.mover(); // ✅ garantido que existe
}

fazMover(new Animal());   // ✅
fazMover(new Cachorro()); // ✅
//fazMover({});             // ❌ erro



function corEscolhida<T extends "vermelho" | "azul" | "verde">(cor: T): T {
    return cor;
}

corEscolhida("vermelho"); // ✅
corEscolhida("azul");     // ✅
//corEscolhida("preto");    // ❌ não permitido


// Estoque de livros
const estoqueLivros = new Estoque<Livro>();
estoqueLivros.adicionar(new Livro("Harry Potter", "J.K. Rowling"));
estoqueLivros.adicionar(new Livro("O Hobbit", "Tolkien"));
console.log("📚 Livros no estoque:", estoqueLivros.listar());

// Estoque de roupas
const estoqueRoupas = new Estoque<Roupa>();
estoqueRoupas.adicionar(new Roupa("Camiseta", "M"));
estoqueRoupas.adicionar(new Roupa("Calça Jeans", "42"));
console.log("👕 Roupas no estoque:", estoqueRoupas.listar());


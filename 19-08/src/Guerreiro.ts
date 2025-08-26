import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {
    constructor(vida: number) {
        super(vida);
    }

    // Método público que chama o protected de outra instância via método público
    atacar(inimigo: Personagem) {
        console.log(`${this.constructor.name} atacando ${inimigo.constructor.name}...`);
        inimigo.receberDano(10); // usa o método público, que chama o protected internamente
    }

    // Método que acessa diretamente o protected da própria instância
    treinar() {
        console.log(`${this.constructor.name} treinando...`);
        this.sofrerDano(5); // ✅ permitido: acessando protected da própria instância
    }
}
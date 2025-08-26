export class Personagem {
    protected vida: number;

    constructor(vida: number) {
        this.vida = vida;
    }

    // Método protected: só pode ser chamado dentro da classe ou subclasses
    protected sofrerDano(valor: number) {
        this.vida -= valor;
        console.log(`${this.constructor.name} sofreu ${valor} de dano. Vida atual: ${this.vida}`);
    }

    // Método público para permitir que outras instâncias recebam dano sem expor o protected
    public receberDano(valor: number) {
        this.sofrerDano(valor);
    }
}


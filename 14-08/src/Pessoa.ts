export class Pessoa {
    private nome: string;
    private idade: number;
    private altura: number;


    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome,
            this.idade = idade,
            this.altura = altura

    }


    apresentar(): string {

        return (`Ola meu nome é: ${this.nome} e tenho ${this.idade} de idade, minha altura é ${this.altura}`)
    }

    // Getter - Metodo que "pega" o valor!
    getNome(): string {
        return this.nome
    }

    // Setter - Metodo que "define" o valor
    setNome(novoNome: string): void {
        this.nome = novoNome
    }

// criar get e set para idade e impeça que uma idade pode ser negativa

    getIdade(): number {
        return this.idade
    }

    setIdade(novaIdade: number):void {
        if (novaIdade < 0){
            console.log("Chapadao");
            
        }
        this.idade = novaIdade
    }



}



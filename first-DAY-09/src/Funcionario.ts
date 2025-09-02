export abstract class Funcionario {
    protected nome: string; 

    constructor(nome:string) {
        this.nome = nome;
    }
      abstract calcularSalario(): number
    
};
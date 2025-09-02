import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario{

        salarioPj: number;

    constructor(nome:string, salarioPj:number){
        super(nome);
        this.salarioPj = salarioPj
    };

    calcularSalario(): number {
       return this.salarioPj 
        
    }
};


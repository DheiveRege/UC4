import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario {


    protected salarioFixo: number = 1500

    constructor(nome:string,salarioFixo:number){
        super(nome);
        this.salarioFixo = this.salarioFixo;
    };

    calcularSalario(): number {
      return this.salarioFixo;
       
    };


};
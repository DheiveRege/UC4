import { Cla } from "./Cla";

export class ClaAkimichi extends Cla {

    constructor(claNome:string, lider:string){
        super(claNome, lider)
    };



    exibirDetalhes(): void {
        console.log(`O lider atual e o chouza`);
        
    };

    habilidadeEspecial(): void {
        console.log(`Habilidade especial e o ampliacao corporal`);
        
    };

    ataqueEspecial(): void {
        console.log(`O ${this.lider} usou o ataque especial, e matou seu inimigo`);

    };

    
};
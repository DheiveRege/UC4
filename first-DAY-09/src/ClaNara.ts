import { Cla } from "./Cla";

export class ClaNara extends Cla {

    constructor(claNome:string, lider:string){
        super(claNome, lider)
    };



    exibirDetalhes(): void {
        console.log(`O lider atual e o shicamaru`);
        
    };

    habilidadeEspecial(): void {
        console.log(`Habilidade especial e controlar sombras`);
        
    };

    ataqueEspecial(): void {
        console.log(`O ${this.lider} usou o ataque especial, e matou seu inimigo`);

    };

    
};
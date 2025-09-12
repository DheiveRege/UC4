import { Cla } from "./Cla";

export class ClaHyuuga extends Cla {

    constructor(claNome: string, lider: string) {
        super(claNome, lider)
    };



    exibirDetalhes(): void {
        console.log(`O lider atual e o zé do olho branco`);

    };

    habilidadeEspecial(): void {
        console.log(`Habilidade especial e o Olho branco`);

    };
    
    ataqueEspecial(): void {
        console.log(`O ${this.lider} usou o ataque especial, e matou seu inimigo`);

    };


};
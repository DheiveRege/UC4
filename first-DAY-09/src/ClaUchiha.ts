import { Cla } from "./Cla";

export class ClaUchiha extends Cla {

    constructor(claNome: string, lider: string) {
        super(claNome, lider)
    };



    exibirDetalhes(): void {
        console.log(`O lider atual e o Sakuque`);

    };

    habilidadeEspecial(): void {
        console.log(`Habilidade especial e o sharigan`);

    };

    ataqueEspecial(): void {
        console.log(`O ${this.lider} usou o ataque especial, e matou seu inimigo`);

    };

};


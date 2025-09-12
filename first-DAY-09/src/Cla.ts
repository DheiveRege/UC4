export abstract class Cla {
    claNome: string;
    lider: string;

    constructor(claNome: string, lider: string) {
        this.claNome = claNome;
        this.lider = lider;
    };

    abstract habilidadeEspecial():void

    abstract exibirDetalhes():void

    abstract ataqueEspecial():void
    
};





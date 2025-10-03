export class Caixa<T> {
    conteudo: T;

    constructor(conteudo: T) {
        this.conteudo = conteudo
    };

    verConteudo():T{
        return this.conteudo;
    };

};

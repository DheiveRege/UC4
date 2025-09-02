export abstract class UsuarioSistema{
    nome:string;

    constructor(nome:string){
        this.nome = nome;
    };


    abstract acessarPainel():void
}
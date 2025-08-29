import { IAutenticacao } from "./IAutenticacao";

export class SistemaLogin implements IAutenticacao {
    usuario: string;
    senha: string;

    constructor(usuario:string, senha: string){
        this.usuario = usuario;
        this.senha = senha;
    };


    autenticar(usuario: string, senha: string): boolean {
        return usuario === "adimin" && senha === "1234"

        
    };
}
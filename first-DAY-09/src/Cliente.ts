import { SignatureKind } from "typescript";
import { IAutenticavel } from "./IAutenticavel";
import { UsuarioSistema } from "./UsuarioSistema";

export class Cliente  extends UsuarioSistema implements IAutenticavel  {
    usuario: string;
    senha: string;

    constructor(nome: string, usuario: string, senha: string) {
        super(nome);
        this.usuario = usuario;
        this.senha = senha;


    };

     acessarPainel(): void {
        console.log(`Bem vindo de volta cliente ${this.nome}  ${this.usuario} `);

    };

    autenticar(usuario: string, senha: string): boolean {
        if (usuario === "Stark".toLocaleLowerCase() && senha === "1234AB".toLocaleLowerCase()) {
            this.acessarPainel();
            return true
        };
        return false
    };
};
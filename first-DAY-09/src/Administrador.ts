import { IAutenticavel } from "./IAutenticavel";
import { UsuarioSistema } from "./UsuarioSistema";

export class Administrador extends UsuarioSistema implements IAutenticavel {
    usuario: string;
    senha: string;

    constructor(nome: string, usuario: string, senha: string) {
        super(nome);
        this.usuario = usuario;
        this.senha = senha;


    };

    acessarPainel(): void {
        console.log(`Bem vindo de volta adiministrador ${this.nome} ${this.usuario} `);

    };

    autenticar(usuario: string, senha: string): boolean {
        if (usuario === "Adimin".toLocaleLowerCase() && senha === "1234AA".toLocaleLowerCase()) {
            this.acessarPainel();
            return true
        };
        if (!usuario) {
            console.log("Chapando???");

        };
        return false
    };
};
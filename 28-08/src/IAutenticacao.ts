export interface IAutenticacao {
    usuario: string;
    senha: string;




    autenticar(usuario: string, senha: string): boolean
}
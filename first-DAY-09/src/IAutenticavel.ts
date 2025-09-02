export interface IAutenticavel {
    usuario: string;
    senha: string;

    autenticar(usuario: string, senha: string): boolean
};
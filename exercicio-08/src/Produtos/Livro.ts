import { Estoque } from "../Estoque";

export class Livro {
    titulo: string;
    autor: string;
    preco: number;

    constructor(titulo: string, autor: string, preco: number) {
        this.autor = autor;
        this.titulo = titulo;
        this.preco = preco;
    };


    
};
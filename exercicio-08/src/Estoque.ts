export class Estoque<T> {

    private itens: T[] = [];

    adicionar(item: T): void {
        this.itens.push(item);
    };

    listar(): T[] {
         return this.itens;
         
    };

    remover(indice: number): void {
        this.itens.splice(indice, 1);
    };

    pesquisar(codicao: (item: T) => boolean): T[]{
        return this.itens.filter(codicao)
    };
};


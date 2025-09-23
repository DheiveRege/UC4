export class GerenciarEstoque {
    estoque: string[] = ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"];

    remover(produto: string): void
    remover(produto: string[]): void

    remover(produto: any): any {
        if (Array.isArray(produto)) {
            for (let p of produto) {
                for (let i = 0; i < this.estoque.length; i++) {
                    if (this.estoque[i] === p) {
                        this.estoque.splice(i, 1);
                        console.log(`O ${p} foi deletado.`);
                        console.log(`O estoque ficou cons os produtos:  ${this.estoque}`);
                        break;
                    };
                };
            };
        } else {
            for (let i = 0; i < this.estoque.length; i++) {
                if (this.estoque[i] === produto) {
                    this.estoque.splice(i, 1);
                    console.log(`O ${produto} foi deletado.`);
                    console.log(`O estoque ficou cons os produtos:  ${this.estoque}`);
                    
                    break;
                };
            };
        };
    };
};
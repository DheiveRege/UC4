export class lojaPresente {
    armazen: string[] = [];




    adicionarProduto(produto: string): void;

    adicionarProduto(produto: string[]): void

    adicionarProduto(pro: any) {
        if (Array.isArray(pro)) {
            this.armazen.push(...pro);
            console.log("Adicionando os produtos" + pro);
            
        } else {
            this.armazen.push(pro);
            console.log("adicionado" + pro);
            
        }

    };
};

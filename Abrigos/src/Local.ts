
//  criando classe "PAI":
export class Local {
    protected nome: string;
    protected endereco: string;
    protected cidade: string;
    protected telefone: string;

    // criando construtor
    constructor(nome: string, endereco: string, cidade: string, telefone: string) {
        this.cidade = cidade;
        this.endereco = endereco;
        this.telefone = telefone;
        this.nome = nome;
    };


    //funcao que mostra as informacoes de um LOCAL ao ser chamada
    mostarInfo(): void {
        console.log(`Nome: ${this.nome}\nEndereço: ${this.cidade}\nCidade: ${this.endereco}\nTelefone: ${this.telefone}`);
    };






    //Geter e Seters:


    //Geters
    getNome(): string {
        return this.nome;
    };

    getEnedereco(): string {
        return this.endereco;
    };

    getCidade(): string {
        return this.cidade;
    };
    getTelefone(): string {
        return this.telefone;
    };


    //Seters
    setNome2(novoNome: string): void {
        this.nome = novoNome
    };

    setEdereco2(novoEdereco: string): void {
        this.endereco = novoEdereco
    };

    setCidade2(novaCidade: string): void {
        this.cidade = novaCidade;
    };

    setTelefone2(novoTelefone: string): void {
        this.telefone = novoTelefone;
    };


};
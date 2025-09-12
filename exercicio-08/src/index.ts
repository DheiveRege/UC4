import readline from "readline-sync";
import { Estoque } from "./Estoque";
import { Roupa } from "./Produtos/Roupa";
import { Livro } from "./Produtos/Livro";
import { Brinquedo } from "./Produtos/Brinquedo";
import { Eletronico } from "./Produtos/Eletronico";
let menu = true;
let menuCase1 = true;


const estoque = new Estoque<Roupa>();
const estoque2 = new Estoque<Livro>();
const estoque3 = new Estoque<Brinquedo>();
const estoque4 = new Estoque<Eletronico>();

while (menu) {

    console.log("1-- Cadastrar Produto");
    console.log("2-- Buscar(por classes)");
    console.log("3-- Buscar por fodase buscar ai trouxa");
    console.log("4-- Remover");
    console.log("5-- Sair");
    const opacao = readline.question(`Escolhe ai seu merda:`);

    switch (opacao) {
        case "1":
            console.log("1-- Livro");
            console.log("2-- roupa");
            console.log("3-- brinquedo");
            console.log("4-- eletronico");
            const opacao2 = readline.question(`Qual produto voce deseja cadastrar:`);
                switch (opacao2) {
                    case "1":
                        const perguntarLivro = readline.question('Qual o titulo de seu livro:');
                        const perguntarLivro2 = readline.question('Qual o autor de seu livro:');
                        const perguntarLivro3: number = Number(readline.question('Qual o preco de seu livro:'));

                        const livro = new Livro(perguntarLivro, perguntarLivro2, perguntarLivro3);

                        estoque2.adicionar(livro);
                        console.log(livro)
                        break;
                    case "2":
                        const perguntarRoupa = readline.question('Qual o nome da sua roupa:');
                        const perguntarRoupa2 = Number(readline.question('Qual o tamanho de sua roupa:'));
                        const perguntarRoupa3: number = Number(readline.question('Qual o preco de sua roupa:'));

                        const roupa = new Roupa(perguntarRoupa, perguntarRoupa2, perguntarRoupa3);

                        estoque.adicionar(roupa);
                        console.log(roupa);
                        break;
                    case "3":
                        const perguntarBrinquedo = readline.question('Qual a descricao de seu Brinqudo:');
                        const perguntarBrinquedo2 = Number(readline.question('Qual a idade minima de seu Brinqudo:'));
                        const perguntarBrinquedo3 = Number(readline.question('Qual o preco de seu Brinqudo:'));

                        const brinquedo = new Brinquedo(perguntarBrinquedo, perguntarBrinquedo2, perguntarBrinquedo3);

                        estoque3.adicionar(brinquedo);
                        console.log(brinquedo);
                        break;
                    case "4":
                        const perguntarEletronico = readline.question('Qual a descricao de seu Brinqudo:');
                        const perguntarEletronico2 = Number(readline.question('Qual a idade minima de seu Brinqudo:'));
                        const perguntarEletronico3 = (readline.question('Qual o preco de seu Brinqudo:'));

                        const eletronico = new Eletronico(perguntarEletronico, perguntarEletronico2, perguntarEletronico3);

                        estoque4.adicionar(eletronico);
                        console.log(eletronico);
                        break;
                    case "5":
                        console.log(`Saindo.......................`);
                        break;

                    default:
                        console.log("opcao errado imundo");
                };
            break;

        case "2":
            console.log("classes disponiveis no estoque \nLivro = 1\nRoupa = 2  \nBrinquedo = 3 \nEletronico = 4");
            const buscaCLasse = readline.question("Qual voce vai pesquisar?").toLocaleLowerCase();
            if (buscaCLasse === "1") {
                console.log("1-- Busca por titulo");
                console.log("2-- Busca por autor");
                console.log("3-- Busca por preco");
                const buscaAtributos = readline.question("Qual sua opcao?");
                if (buscaAtributos === "1") {
                    const qualTitulo = readline.question("Qual titulo de livro deseje buscar?");
                    const resultado1 = estoque2.pesquisar(livro => livro.titulo.includes(qualTitulo))
                    console.log({resultado1});

                } else if (buscaAtributos === "2") {
                    const qualTamanho = readline.question("Qual autor de livro deseje buscar?");
                    const resultado1 = estoque2.pesquisar(livro => livro.autor.includes(qualTamanho))
                    console.log({resultado1});
                } else if (buscaAtributos === "3") {
                    const qualPreco: number = Number(readline.question("Qual preco de livro deseje buscar?"));
                    const resultado1 = estoque2.pesquisar(livro => livro.preco <= qualPreco)
                    console.log({resultado1});
                }

            } else if (buscaCLasse === "2") {
                console.log("1-- Busca por marca");
                console.log("2-- Busca por tamanho ");
                console.log("3-- Busca por preco");
                const buscaAtributos = readline.question("Qual sua opcao?");
                if (buscaAtributos === "1") {
                    const qualMarca = readline.question("Qual marca de roupa deseje buscar?");
                    const resultado1 = estoque.pesquisar(roupa => roupa.marca.includes(qualMarca))
                    console.log({resultado1});

                } else if (buscaAtributos === "2") {
                    const qualAutor = Number(readline.question("Qual tamanho de roupa deseje buscar?"));
                    const resultado1 = estoque.pesquisar(roupa => roupa.tamanho === qualAutor)
                    console.log({resultado1});
                } else if (buscaAtributos === "3") {
                    const qualPreco: number = Number(readline.question("Qual preco de roupa deseja buscar?"));
                    const resultado1 = estoque.pesquisar(roupa => roupa.preco <= qualPreco)
                    console.log({resultado1});
                };
            } else if (buscaCLasse === "3") {
                console.log("1-- Busca por nome");
                console.log("2-- Busca por idade minima ");
                console.log("3-- Busca por preco");
                const buscaAtributos = readline.question("Qual sua opcao?");
                if (buscaAtributos === "1") {
                    const qualNome = readline.question("Qual nome de brinquedo deseje buscar?");
                    const resultado1 = estoque3.pesquisar(roupa => roupa.nome.includes(qualNome))
                    console.log({resultado1});

                } else if (buscaAtributos === "2") {
                    const qualMinima = Number(readline.question("Qual a idade minima de brinquedo deseje buscar?"));
                    const resultado1 = estoque3.pesquisar(brinquedo => brinquedo.idadeMinima >= qualMinima)
                    console.log({resultado1});
                } else if (buscaAtributos === "3") {
                    const qualPreco: number = Number(readline.question("Qual preco de brinquedo deseja buscar?"));
                    const resultado1 = estoque3.pesquisar(brinquedo => brinquedo.preco <= qualPreco)
                    console.log({resultado1});
                };

            } else if (buscaCLasse === "4") {
                console.log("1-- Busca por marca");
                console.log("2-- Busca por tamanho ");
                console.log("3-- Busca por preco");
                const buscaAtributos = readline.question("Qual sua opcao?");
                if (buscaAtributos === "1") {
                    const qualModelo = readline.question("Qual modelo eletronico deseja buscar?");
                    const resultado1 = estoque4.pesquisar(eletronico => eletronico.modelo.includes(qualModelo))
                    console.log({resultado1});

                } else if (buscaAtributos === "2") {
                    const qualPreco: number = Number(readline.question("Qual preco do eletronico que deseja buscar?"));
                    const resultado1 = estoque4.pesquisar(eletronico => eletronico.preco <= qualPreco)
                    console.log({resultado1});
                } else if (buscaAtributos === "3") {
                    const qualMarca = readline.question("Qual marca de eletronico deseja buscar?");
                    const resultado1 = estoque4.pesquisar(eletronico => eletronico.marca.includes(qualMarca))
                    console.log({resultado1});
                };
            }
            break;
        case "3":
            const perguntaDelet = readline.question("Qual estoque deseja listar? \n Os estoques sao: \n Livro, Brinquedo, Roupa, Eletronico  \nDigite: ".toLocaleLowerCase());
            if (perguntaDelet === "Livro".toLocaleLowerCase()) {

                console.log(estoque2.listar());

            } else if (perguntaDelet === "Roupa".toLocaleLowerCase()) {

                console.log(estoque.listar());

            } else if (perguntaDelet === "Brinquedo") {

                console.log(estoque3.listar());

            } else if (perguntaDelet === "Eletronico".toLocaleLowerCase()) {

                console.log(estoque4.listar());

            };
            break;
        case "4":
            const perguntaDelete = readline.question("Qual estoque deseja Remover?? \n Os estoques sao: \n Livro, Brinquedo, Roupa, Eletronico  \nDigite: ".toLocaleLowerCase());
            if (perguntaDelete === "Livro".toLocaleLowerCase()) {

                console.log(estoque2.remover(0));

            } else if (perguntaDelete === "Roupa".toLocaleLowerCase()) {

                console.log(estoque.remover(0));

            } else if (perguntaDelete === "Brinquedo") {

                console.log(estoque3.remover(0));

            } else if (perguntaDelete === "Eletronico".toLocaleLowerCase()) {

                console.log(estoque4.remover(0));

            };
            break;
        case "5":
            console.log(`Saindo.......................`);
            menu = false;
            break;

        default:
            console.log("opcao errado imundo");
    };
};
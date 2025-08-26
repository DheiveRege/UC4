
//Importacoes:
import { Abrigo } from "./Abrigo";
import { Local } from "./Local";
import { SistemasAbrigo } from "./SistemasAbrigo";
import * as readline from 'readline-sync';


const abc: SistemasAbrigo = new SistemasAbrigo();


let menu = true;

//menu enquanto a condicao for verdadeira(loop)
while (menu) {
    //escolhas
    console.log(`|---  bem vindo ao menu  ---|`);
    console.log(` 1---  Cadastrar um menu`);
    console.log(` 2---  Listar abrigo`);
    console.log(` 3---  Procurar abrigo`);
    console.log(` 4---  Sair`);


    const Escolha = readline.question(`Escolha alguma dessas opcoes:`)

    switch (Escolha) {


        case "1":
            //chamndo funcao cadastrar abrigo
            abc.cadastrarAbrigo();


            break;
        case "2":
            //chamando funcao listar abrigo
            abc.listarAbrigos();


            break;

        case "3":
            //chamndo funcao procurar abrigo pelo nome da cidade
            abc.procurarAbrigo();

            break;

        case "4":
            // condicao se torna false entao sai do loop
            console.log(`Saindo...................`);

            menu = false;
            break;

        default:
            //caso algum erro exibe este aviso
            console.log(`Opcao inexistente`);

    };




};



//test github









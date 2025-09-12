
import { IProduto } from "./IProduto";
import { IUsuario } from "./IUsuario";
import { ILivro } from "./ILivro";
import { IFuncionario } from "./IFuncionario";
import { Circuferencia } from "./Circuferencia";
import { Quadrado } from "./Quadrado";
import { SistemaLogin } from "./SistemaLogin";


//Objeto seguindo regras da interface kkk👀👀😁😁😅😅😅
const player: IUsuario = {
    nome: "PedroMatador",
    idade: 9
};

const produto: IProduto = {
    nome: "Mouse",
    preco: 99.99

};

const livro: ILivro = {
    titulo: "algum titulo",
    autor: "talvez alguem",
    lancamento: 2000

};

const funcionario: IFuncionario = {
    nome: "funcionarinho",
    salario: 1500
};

const circulo: Circuferencia = {
    diametro: 10

};

const quadrado: Quadrado = {
    altura: 20
};


const adimin: SistemaLogin = {
    usuario: "adimin",
    senha: "1234",
   
};


function mostrarProduto(produto: IProduto): void {
    console.log(`${produto.nome} Custa R$ ${produto.preco}`);

};


function mostrarLivro(livro: ILivro): void {
    console.log(`titulo: ${livro.titulo} \n Autor:${livro.autor} \n Data: ${livro.lancamento}`);

};



function calcularBonus(funcionario: IFuncionario) {
    let bonus = funcionario.salario * 0.10
    console.log(`Seu saliro + BONUS: ${bonus + funcionario.salario} \n BONUS LIMPO ${bonus} `);

};

function calcularArea(quadrado: Quadrado): number {
    return quadrado.altura ** 2

};

function calcularArea2(circulo: Circuferencia): number {
    return circulo.diametro * 3.14

};

function autenticar(adimin: SistemaLogin): boolean {
    return adimin.usuario === "adimin" && adimin.senha === "1234"

    
};




console.log(player.nome, player.idade);
console.log(mostrarProduto(produto));

console.log(mostrarLivro(livro));

console.log(calcularBonus(funcionario));

console.log(calcularArea(quadrado));
console.log(calcularArea2(circulo));


console.log(autenticar(adimin));









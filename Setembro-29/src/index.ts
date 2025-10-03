import { Estoque } from "./Genericos/Estoque";
import { Livro } from "./Genericos/Livro";
import { Roupa } from "./Genericos/Roupa";
import { User } from "./User";


//No Generico😥😥😥
function abc(item: number, item2: number): number {
    return item + item2;
};

function abc2(item: string, item2: string): string {
    return item + item2;
};

//ou faz assim animal

function realAbc<T extends string | number>(item: T, item2: T): T {
    return ((item as any) + (item2 as any)) as T;
};

console.log(`${realAbc<number>(10, 20)}anus idade \n${realAbc<string>(`regin`, `aldo`)}`);



function print2<T>(item: T): void {
    console.log(item);

};

print2("Ola mundo")


//Arrays 👀🥵

const humanos: string[] = ["renaldo", "pereira", "alves"];
const numberos: number[] = [1, 2, 3, 4, 5, 6, 7];


function lerTodosOsARRAYS<T extends string[] | number[]>(array: T): T {
    return ((array as any) as T);
};



console.log(`Array 1: ${lerTodosOsARRAYS(humanos)}\nArray 2: ${lerTodosOsARRAYS(numberos)}`);

//kkk sei mais nada

const user: User = new User("pele", "pele@gmail.com", "3_copas")

function LerNomes<T extends { nome: string }>(goat: T): string {
    return goat.nome;
};

console.log(`${LerNomes<User>(user)}`);


function verTamanho<T extends { length: number }>(item: T): number {
    return item.length ;
};



console.log(`${verTamanho<string>("pereira")}\n ${verTamanho(numberos)} \n muitos mangos do gueto adrian`);


//tambem da para fazer seguindo a mesma regra com interfaces e classes, fodase nao quero fazer exemplos

//e outra da para fazer restringindo se algo tem uma funçao

const roupa:Roupa = new Roupa("camisa","G");

let estoqueDeRoupa:Estoque<Roupa> = new Estoque();

estoqueDeRoupa.adicionar(roupa);
console.log(estoqueDeRoupa.listar());



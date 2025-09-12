import { test } from "./test";



const a:test = new test("nomeFoda");

console.log(a.getNome());






// simulado prova conhecimento global

/* 
1- A ---> D erro
2- C ---> C
3- C ---> C
4- B ---> B
5- A ---> A
6- A ---> A
7- D ---> D
8- B ---> B
9- C ---> B

|-------------------------\
interpretaçao de codigo:


1-console.log(person.getName); (correcao)

2- 1- woof!
   2- this dog is a Golden Retriever breed
   3- Fetching

3- a classe square nao e filha de shape portanto nunca ira aparecer no array shape

4- funçao so pede 1 parametro mas o imbecil do user coloca 2 e interface nao vai logica

*/
/*
//FOR IN (para interar com um objeto)


let pessoa18022009D: { nome: string; idade: number } = {
    nome: "Dheive",
    idade: 16
};
// type of descobre o tipo
//key of descobre as chaves d eum objeto



for (let bosta in pessoa18022009D) {
    console.log(`${bosta} ${pessoa18022009D[bosta as keyof typeof pessoa18022009D]}`);
};


//FOR EACH
let personagens:string[] = ['goku','kratos','mario']

//foreach e usado em arrays
//exeutar cada item desse arrya,essa funcao e chamada como parametro do forEach(CallBack)
//o primeiro parametro dessa funcao e seu valor e o segundo e seu indice
personagens.forEach((nome, indice) => (
    console.log(`personagem ${indice}: ${nome}`)
    
));

do {
    console.log(`contador: ${con}`);
    
}

*/







//Exercicios 1



const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];


for (let i = 0; i < sociedade.length;i++) {
    const Hobbit = sociedade[i];
    if (Hobbit === "Frodo" || Hobbit === "Sam" || Hobbit === "Merry" || Hobbit === "Pippin" ){
        console.log(`os hobbits sao: ${Hobbit}`);
        
    }

};

//Exercicio 2


const personagens = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
  ];


for (let goiaba in personagens){
    if(personagens[goiaba].jedi === true){
    console.log(`porras do jedi: ${personagens[goiaba].nome}`);

    }
};


//Exercicio 3


const personagens1 = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
  };

for(let verClans in personagens1){
    console.log(`${verClans} ${personagens1[verClans as keyof typeof personagens1]}`);
    

};


//Exercicio 4





  
  const personagens3 = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
  ];


personagens3.forEach(personagem 
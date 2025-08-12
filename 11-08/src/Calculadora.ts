import readline from 'readline-sync';

let controlador = true;


function subritair(): number {
    let num = Number(readline.question("Digite um numero ai: "));
    let num2 = Number(readline.question("Digite o segundo numero: "));
    return num - num2;
  
};



function soma(): number {
    let num = Number(readline.question("Digite um numero ai: "));
    let num2 = Number(readline.question("Digite o segundo numero: "));
    return num + num2;

};

function multiplicacao(): number {
    let num = Number(readline.question("Digite um numero ai: "));
    let num2 = Number(readline.question("Digite o segundo numero: "));
    return num * num2;
};


function divisao(): number {
    let num = Number(readline.question("Digite um numero ai: "));
    let num2 = Number(readline.question("Digite o segundo numero: "));  
    if (num2 === 0){
        console.log("Erro na divisao por 0");
        return NaN;
        
    }
       return num / num2;
      
    
};


while (controlador) {
    console.log("---| Menu 👍 |---");
    console.log("1- subitrair");
    console.log("2- soma");
    console.log("3 multiplicacao");
    console.log("4- divisao");
    console.log("5- desligar calculadora");

    const opcao = readline.question("Escolhe uma ai otario: ");
    
let resultado:number 
    switch (opcao) {
        case "1":
            resultado = subritair();
            console.log(`seu resultado é : ${resultado} 😔👍`);
            

            break;
        case "2":
            resultado = soma();
            console.log(`seu resultado é : ${resultado}🏆🏆`);
            


            break;
        case "3":
            resultado = multiplicacao();
            console.log(`seu resultado é : ${resultado}😍😍`);

            break;
        case "4":
            resultado = divisao();
            console.log(`seu resultado é : ${resultado}👀👀`);

            break;
        case "5":
            console.log("saiu 😎👍");
            controlador = false;
            break;
        default:
            console.log("Opcao inexistente😔");

    }
};




import { Calculadora } from "./Calculadora";

const calc = new Calculadora(10, 5);

console.log("Soma:", calc.somar());          
console.log("Subtração:", calc.subtrair()); 
console.log("Multiplicação:", calc.multiplicar()); 
console.log("Divisão:", calc.dividir());    



function divisao(num: number, num2: number): number {
    return num / num2;

};
console.log(`sua divisao deu: ${divisao(10, 2)}`);

//FOR || para percorrer um ARRAY
const numeros: number[] = [10, 20, 30];

for (let i = 0; i < numeros.length; i++) {
    console.log(`Índice ${i}: ${numeros[i]}`);
}




//WHILE || enquanto nao chegar no objetivo



let contador:number = 0;

while (contador  < 10) {
  console.log(`Contador: ${contador}`);
  contador++;
};
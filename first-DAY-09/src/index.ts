import { Administrador } from "./Administrador";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionario";
import { FuncionarioCLT } from "./FuncionarioCLT";
import { FuncionarioPJ } from "./FuncionarioPJ";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";

const empresario: FuncionarioPJ = new FuncionarioPJ("Empresario", 5500);

const CLThanos: FuncionarioCLT = new FuncionarioCLT("CLT", 0);

const triangulo: Triangulo = new Triangulo(10, 20);

const retangulo: Retangulo = new Retangulo(10,20);

const cliente: Cliente = new Cliente("TONY", "STARK", "1234AB");

const adimin: Administrador = new Administrador("Cleber", "adimin","1234AA")











console.log(empresario.calcularSalario());
console.log(CLThanos.calcularSalario());
console.log(`|-------------------------------------|`);

console.log(triangulo.clacularArea());
console.log(retangulo.clacularArea());

console.log(`|-------------------------------------|`);

console.log(adimin.acessarPainel());
console.log(cliente.acessarPainel());


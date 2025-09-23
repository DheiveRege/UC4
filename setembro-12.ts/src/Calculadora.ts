export class Calculadora {


    somar(a: number, b: number): number;   // assina que pode receber dois números

    somar(a: string, b: string): string;   // assina que pode receber duas strings

    somar(a: any, b: any): any {
        return a + b;  // aqui o TypeScript vai decidir o que fazer dependendo do tipo de 'a' e 'b'
      };
}
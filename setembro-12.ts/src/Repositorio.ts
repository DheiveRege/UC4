export class Repositorio {
    buscar(id: number): string;
    buscar(nome: string): string[];
  
    buscar(arg: any): any {
      if (typeof arg === "number") {
        return "Usuário com id " + arg;
      } else {
        return ["Usuário1", "Usuário2"];
      }
    }
  };
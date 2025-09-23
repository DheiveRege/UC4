import { Pizza } from "./Pizza";
import { PrecoPizza } from "./PrecoPizza";
import { SaborPizza } from "./SaborPizza";
import { TamanhoPizza } from "./TamanhoPizza";
import * as readline from "readline-sync";
const p: Pizza = new Pizza(SaborPizza.calabresa, TamanhoPizza.gigantescoooooo);
let menu = true;






while (menu) {
    console.log("|--------- Menu gostoso pizza ----------|");
    

    const opcao = readline.question("Escolhe ai");

    switch (opcao) {
        case "1":


            break;
        case "2":
            menu = false;
            break

        default:
            console.log("senhor erro");
            break;

    }

}
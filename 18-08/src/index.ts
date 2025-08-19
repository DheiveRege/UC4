import { Animal } from "./Animal";
import { Crocodile } from "./Crocodile";
import { Dog } from "./Dog";
import { Owl } from "./Owl";

const dogFedido: Dog = new Dog("bolotao", 8);
const coruja: Owl = new Owl("Olhudo", 3);
const crocodilo: Crocodile = new Crocodile("valdemir", 65)
const animais: Animal[] = [dogFedido, crocodilo ,coruja];

console.log(dogFedido.name);
console.log(dogFedido.weight);

dogFedido.bark();
dogFedido.eat();



console.log(coruja.name);
console.log(coruja.weight);

coruja.eat();
coruja.fly(100);




console.log(crocodilo.name);
console.log(crocodilo.weight);

crocodilo.eat();
crocodilo.swim(200);




for(const Animais of animais ){
    Animais.eat();
    
    
}
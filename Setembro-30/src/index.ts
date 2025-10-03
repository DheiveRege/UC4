

function verTamanho<T extends { length: number }>(item: T): void {
    for (let i = 0; i < item.length; i++) {
        console.log(item[i]);

    };

};


verTamanho("valsonabo");

let array: string[] = ["Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","Vermelho","verde"]

for (let i = 0; i < array.length; i++) {
    if (array[i] === "verde") {
        console.log(`abriu a porta,porque achei o${array[i]}`);

        break;


    };


};

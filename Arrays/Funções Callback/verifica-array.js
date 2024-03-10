const numeros = [2, 4, 6, 8, 10];


let indice = 0;
const programa = numeros.forEach(function (numero, indice) {
    if (numero === indice) {
        console.log(`O elemento ${numero} está no índice ${indice}`);
    } else {
        console.log(`O elemento ${numero} não está no índice ${indice}`);
    }
})


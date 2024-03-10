function executaOperacoes(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const resultado = callback(array[i]);
        console.log(`Resultado da operação para o elemento ${array[i]}: ${resultado}`);
    }
}

const numeros = [2, 4, 6, 8, 10];

function somar(numero) {
    return numero + numero;
}

executaOperacoes(numeros, somar);
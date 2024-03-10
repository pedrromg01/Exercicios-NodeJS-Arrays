function verificarNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            return i; // Retorna o índice se o número for encontrado
        }
    }
    return -1; // Retorna -1 se o número não for encontrado
}

const numeros = [2, 4, 6, 8, 10];
const numeroProcurado = 6;

const indice = verificarNumero(numeros, numeroProcurado);

if (indice !== -1) {
    console.log(`O número ${numeroProcurado} está presente no índice ${indice}.`);
} else {
    console.log(`O número ${numeroProcurado} não está presente no array.`);
}

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.



function executaOperacaoEmArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const resultado = callback(array[i]);
        console.log(`Resultado da operação para o elemento ${array[i]}: ${resultado}`);
    }
}

const numeros = [2, 4, 6, 8, 10];

function elevadoAoQuadrado(numero) {
    return numero * numero;
}

executaOperacaoEmArray(numeros, elevadoAoQuadrado);
var soma = 0;

function arrayDeNumeros(array) {
    for (let i = 0; i < array.length; i++) {
         soma = soma + array[i];
    }

    const media = soma / array.length;

    console.log(`A soma total é: ${soma}`);
    console.log(`A media dos numeros dentro do array é: ${media}`);
}

const listaDeNumeros = [2, 4, 6, 8, 10, 12];

arrayDeNumeros(listaDeNumeros);
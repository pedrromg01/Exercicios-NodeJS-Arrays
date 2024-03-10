const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

let soma = 0;

function calcularMedia() {

    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }

    const media = soma / numeros.length;
    console.log(`A soma dos numeros dentro do array é ${soma}`);
    console.log(`A media da soma dos numeros é: ${media}`);
}

calcularMedia();
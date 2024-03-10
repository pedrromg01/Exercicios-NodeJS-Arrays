const valores = [10, 10, 10, 10, 10];

function calcularSoma(array) {
    const somaDosNumeros = valores.reduce((acumulador, valor) => acumulador + valor, 0);
    console.log(`A soma dos numeros utilizando reduce é: ${somaDosNumeros}`);

    const media = somaDosNumeros / valores.length;
    console.log(media);
}
calcularSoma(valores);
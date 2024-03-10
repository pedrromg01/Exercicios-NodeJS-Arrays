function arrayNumerosPares(array) {
    const filtrarNumerosPares = array.filter((numero) => numero % 2 === 0);

    console.log(`Os numeros pares dentro do array selecionado é: ${filtrarNumerosPares}`);
}


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayNumerosPares(numeros);
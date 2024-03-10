function multiploDeTresEMaioresQueCinco(array){
    const filtrarMultiplosDeTres = array.filter((numeros) => numeros % 3 === 0);
    console.log(`Os multiplos de 3 são ${filtrarMultiplosDeTres}`);

    const filtrarMaiorQueCinco = array.filter((numeros) => numeros >= 5);
    console.log(`Os numeros maiores que 5 são: ${filtrarMaiorQueCinco}`);

}

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

multiploDeTresEMaioresQueCinco(arrayNumeros);
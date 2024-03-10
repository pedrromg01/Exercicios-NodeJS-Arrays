
let soma = 0;

function arraySoma() {
    const arrayNumeros = [2, 4, 6, 8, 10];

    for (let i = 0; i < arrayNumeros.length; i++) {
        soma = soma + arrayNumeros[i];
    }

    console.log(soma);
}

arraySoma();
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas = somaDasNotas + notas[i];
}

const media = somaDasNotas / notas.length;
console.log(somaDasNotas, media);
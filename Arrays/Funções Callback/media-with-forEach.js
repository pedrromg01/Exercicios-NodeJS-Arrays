const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota) {
    somaDasNotas = somaDasNotas + nota;
    console.log(nota);
})

const media = somaDasNotas / notas.length;

console.log(`A soma das notas é: ${somaDasNotas}`);
console.log(`A media das notas é: ${media}`);


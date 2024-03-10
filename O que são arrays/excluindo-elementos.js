const notasDosALunos = [10, 6, 8, 5.5, 10];
console.log(notasDosALunos);

notasDosALunos.pop();
console.log(notasDosALunos);

const media = (notasDosALunos[0] + notasDosALunos[1] + notasDosALunos[2] + notasDosALunos[3]) / notasDosALunos.length;

console.log(`A media dos respectivos numeros: ${media.toFixed(1)}`);
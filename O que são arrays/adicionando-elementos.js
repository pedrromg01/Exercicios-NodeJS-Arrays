const notasAlunos = [10, 6, 8];

console.log(notasAlunos);

notasAlunos.push(7);

console.log(notasAlunos);

const mediaDosAlunos = (notasAlunos[0] + notasAlunos[1] + notasAlunos[2] + notasAlunos[3]) / notasAlunos.length;


console.log(`A media das notas dos quatros alunos é: ${mediaDosAlunos}`);
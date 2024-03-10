const notas = [10, 11, 3, 5, 6, 8, 5];

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10? 10: nota + 1);

console.log(notasAtualizadas);
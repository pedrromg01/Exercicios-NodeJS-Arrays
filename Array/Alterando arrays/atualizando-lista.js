const listaAlunos = ['JOAO', 'ANA', 'CAIO', 'LARA', 'MARJORIE', 'LEO'];

const listaAtualizada = [...listaAlunos];

listaAtualizada.splice(1,2,'RODRIGUINHO');

console.log(listaAtualizada);

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8, 7.5, 9];

const lista = [alunos, notas];

function exibeNotaNome(aluno) {
    if (alunos.includes(aluno)) {
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`)
    } else {
        console.log('Estudante não existe na lista');
    }
}

exibeNotaNome('Juliana');
exibeNotaNome('Anaconda');
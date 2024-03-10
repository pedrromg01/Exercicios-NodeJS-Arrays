const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

  const turmaJuntas = nomesTurmaA.concat(nomesTurmaB);

  const buscarAluno = 'Carlos Oliveira';

  const procurarAluno = turmaJuntas.find((aluno) => aluno === buscarAluno);

  if (procurarAluno) {
    console.log(`O aluno foi encontrado ${buscarAluno}`);
  } else {
    console.log('Aluno não encontrado');
  }
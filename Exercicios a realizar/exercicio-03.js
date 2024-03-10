const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const listaDeCores = coresLista1.concat(coresLista2);

const novaLista = [...new Set(listaDeCores)];

console.log(novaLista);

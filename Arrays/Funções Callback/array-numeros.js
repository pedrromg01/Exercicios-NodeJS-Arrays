const numeros = [6, 9, 12, 15, 18, 21];


const novoArray = numeros.forEach(function(numero){
    const multiplicao = numero * 3;

    console.log(`As multiplicações dos respectivos arrays são: ${multiplicao}`);
})

const indiceDoDezoito = numeros.findIndex(function(elemento) {
    return elemento === 18;
});

console.log(`O índice do número 18 é: ${indiceDoDezoito}`);
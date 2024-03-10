
function arrayMaiorMenor() {
    const numeros = [10, 23, 42, 58, 23, 12, 94, 58, 31];


    let maiorNumero = Math.max(...numeros);
    let menorNumero = Math.min(...numeros);

    console.log(`O maior número do array é ${maiorNumero} logo o menor número é ${menorNumero}`);
}



let array = [10, 5, 3, 20, 8];
let maiorNumero = array[0];
let menorNumero = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > maiorNumero) {
        maiorNumero = array[i];
    }
    if (array[i] < menorNumero) {
        menorNumero = array[i];
    }
}

console.log("O maior número na array é: " + maiorNumero);
console.log("O menor número na array é: " + menorNumero);
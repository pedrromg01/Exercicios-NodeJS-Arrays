const numeros = [];

numeros.push(2, 4, 6);


const novosNumeros = [...numeros];
console.log(novosNumeros);

let dobro = 2 * 7;

novosNumeros.splice(0, 0, dobro);
console.log(novosNumeros);

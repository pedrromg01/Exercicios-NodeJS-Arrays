function verificadorPolimdromo(string) {
    const stringFormatada = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    const polimdromo = stringFormatada.split('').reverse().join('');

    if (stringFormatada == polimdromo) {
        console.log('Isso aqui é um Polindromo', stringFormatada, '=', polimdromo); 
    } else {
        console.log('Isso não é Croma Cki, sai daqui');
    }
}

verificadorPolimdromo('pedro');
verificadorPolimdromo('eye');
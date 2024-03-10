function arrayAndPush(a, b, c) {
    var array=[];
    array.push(a, b, c);

    var media = (a + b + c) / array.length;

    console.log(array);
    console.log(`A nossa média é: ${media}`);
}

arrayAndPush(2, 2, 2);
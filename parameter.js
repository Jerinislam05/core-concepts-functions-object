function bringSingara(money) {

    console.log('singara nen');
    console.log('taka dise',money);
}
var taka = 300;

bringSingara(taka); // parameter holo ek dhoroner special variable bola jay, jokhon function k call kora hoy tokhon man set kora hoy

// function call korar somoy j maan/value/var deya hoy oita e declaration er parameter hoy

function add(num1, num2) {
    console.log('going to add ', num1, num2);
    console.log('total', num1, num2);
}

add(80, 20);

function sum(a, b, c, d, e) {
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
sum(12, 92, 23)
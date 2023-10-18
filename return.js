function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    // return 15; //return er por ja lekha hoy setar maan(value) return hisebe paowa jabe
    // console.log(sum);
    return sum; //return er pore code r cholbe na, onekta break er moto
}
// add(20, 10);
var total = add(20, 10);
// console.log(total);

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money/singaraPrice;
    return quantity;

}
var myTaka = 120;
var singaras = bringSingara(myTaka);
console.log(singaras);
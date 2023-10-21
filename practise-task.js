// no1.
function foo() {
    console.log('foo');
    bar();
}
function bar() {
    console.log('bar');
}
// bar();
foo();

// no2.
function make_avg(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
const answer = make_avg(8, 7, 6);
console.log(answer);

// no3.
function make_avg2([...numbers]) {
    var sum = 0;
    for ( var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

var num = [7, 8, 3, 9, 10];
var answer2 = make_avg2(num);
console.log(answer2);

// no1.
function odd_even(number) {
    if (number%2 === 0) {
        return 'even';
    } else{
        return 'odd';
    }
}
var number = 12;
var answer = odd_even(number);
console.log(answer);

// no2.
function odd_even2(number) {
    var result;
    if (number%2 === 0) {
        result = 'even';
    } else {
        result = 'odd';
    }
    console.log(result);
}
var number = 11;
odd_even2(number);
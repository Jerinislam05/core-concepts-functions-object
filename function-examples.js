/* function functionName(parameters) {
    function body
    return
}
var returnValue = functionName(parameters value)  */ 
//function k call kore jodi seta kono variable er moddhe rakha hoy tahole seta onno kaje lagano jabe


function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total/3;
    return average;
}
const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log(myAverage);
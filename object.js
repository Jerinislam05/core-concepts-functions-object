/* object holo ekti variable ja onek man dharon korte pare 
# name dite hobe
# curly brace dite hobe
# left side e object er property thake, key o bole egulo
# right side e object er key er man ba value thake
# object er moddhe onek gulo property thake segulor ekta paite chaile console log e object er name er pore (.) diye oi key name dile oita chole ashe
*/
var student = {
    id: 122, 
    name: 'jerin islam', 
    class: 9,
    marks: 80
}

var mobile = {
    brand: 'apple',
    price: 1800000,
    storage: '64gb',
    camera: '7mp'
}

var myComputer = {
    brand: 'dell',
    price: 55000,
    color: 'blue',
    processor: 'ryzen5'
}

myComputer.processor = 'ryzen10'; //notun maan set korte
console.log(myComputer);
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// when you use the specific property name, use dot notation to get the value
var penCount = shoppingCart.pen;
// altenative system
// when you use the specific property name, use dot notation to get the value
var penCount2 = shoppingCart['pen']; // property name jana thakle
var propertyName = 'mouse';
var propertyValues =shoppingCart[propertyName];
console.log(propertyName, propertyValues);
var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart)
// console.log(properties);
// console.log(propertyValues);
// console.log(shoppingCart);
/* property er value paowar 3ta system 
#(.) notation diye property nam likhe
# object er nam likhe then braket er moddhe property nam ta ekta string akare lekha jay
# object er nam ta 3rd braket e likhe property nam kono ek jayga ache sei hisebe nam ta paowa jete pare
*/

// set property values
shoppingCart.mouse = 15;//system 1.
console.log(shoppingCart);
shoppingCart['mouse'] = 30;//system 2.
console.log(shoppingCart);
shoppingCart[propertyName] = 43;
console.log(shoppingCart);
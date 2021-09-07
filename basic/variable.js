/* 3 ways to declare js variable
    * var
    * let
    * const
*/

// var keyword
var a = 1, b=2, c= 3;

var a // it holds the previous value. 

var d; // it is undefined 

d = 7 // here the variable value is assigned to 7

console.log(a,b,c,d);

// the value of var type variable can be changed.

var _name = "Evan", age = 27;

function changeInfo()
{
    let _name = "Safa"
    let age = 7

    return _name+" "+ age
}

_name = "nazif"
age = "11"

console.log(changeInfo());
console.log(_name,age);

// let keyword 
//-------------
/*
    * variable defined using let can not redeclared
    * using varaibale with let must be declared before use
    * let only access for specific block
*/

{
    let firstSay = "hello"
    let say = "from block scope"

    function getValue()
    {
        return firstSay+" "+ say
    }
}

console.log(getValue());


/*
    Variables defined with const cannot be Redeclared.
    Variables defined with const cannot be Reassigned.
    Variables defined with const have Block Scope.


*/

console.log("-----------const variable-------------------");

const PI = 3
// PI = 5
// let PI = 5;
// var PI = 7
console.log(PI);

const cars = ['proton','toyota','bmw']
// cars = ['audi','honda','maruti']
cars.push("audi")

console.log(cars);

const carDetails = {
    type:"Fiat",
    model:500,
    color:"white"
}

console.log(carDetails);

carDetails.type = "Premio"

console.log(carDetails);

console.log(evanVar); // Undefined
evanVar = "EVAN VARIABLE"
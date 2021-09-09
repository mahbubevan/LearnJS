let x = "Evan"
let y = new String("Evan")

console.log(x.length,y.length);
console.log(x,y);
console.log(x.search("v"),y.search("a"));

console.log(x==y, x===y);


let text = 'Hello Evan\'s father'

console.log(text);

let text2 = 'My Last Name Is \'Evan\''
console.log(text2);

let text3 = "This is test for backslash \\"
console.log(text3);

let backspace = "This is the test for backspace \b"
console.log(backspace);

// String Methods

// String Length 
let string = "On a RAIN Day rainy day it rains all day long."
console.log(string);
let totalLength = string.length
console.log(totalLength);

// Slice 

let slicedString = string.slice(3,10)
let reverseSlicedString = string.slice(-5,-3)

console.log(slicedString);
console.log(reverseSlicedString);

// substring() similar to slice but it can not take negative values

let subedString = string.substring(3,10)
console.log(subedString); 

// substr simillar to slice except second parameter specifies the length of extracted parts 

let subbedStr = string.substr(3,10)
console.log(subbedStr); // a Rainy Da 

// Replace
let replacedStr = string.replace("RAIN","evan")
console.log(replacedStr);

// LowerCaes UpperCase 
let convertedUpper = string.toUpperCase()
console.log(convertedUpper);

let convertedLower = string.toLowerCase()
console.log(convertedLower);

// 
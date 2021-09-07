/* 
    JS syntex is set of rules how the language is constructed.
    
    JS syntex define two types of values

    1) Fixed Values
    2) Variable Values 

    Fixed Values are called Literals
    Variable Values are called Variables

    JS keywords to declare variables 
     * var => 
     * let
     * const

*/

// Comments 1 
/* Comments 2 MultiLine */

/*
    JS is Case Sensitive 
    LastName, lastName, lastname are different variables
*/

var LastName = "LastName"
var lastName = "lastName"
var lastname = "lastname"

let firstName = "firstName" // valid
const middleName = "middleName" // valid

/* 
    Invalid Let or LET Const or CONST 
*/

console.log(LastName,lastName,lastname);
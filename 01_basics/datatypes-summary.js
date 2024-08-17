// JS is dynamically typed language
// Datatypes category : based on how they are stored and accessed
// Primitives(call-by-value or copied) : 7 types -> String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
console.log(typeof outsideTemp);


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 234567893456789067890244558888n
console.log(typeof bigNumber);



// Non-Primitive(call_by-reference or use original variable) : Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"]
let myObject = {
    name : "dangal",
    age : 5
}
const myFunc = function(){
    console.log("Hello");
}
console.log(typeof heros);


// typeof:
// null -> object
// undefined -> undefined
// Symbol -> symbol
// bigInt -> bigint
// array -> object
// object -> object
// function -> function  (here object function)


/******************Memory******************* */
// Stack (Primitive): call-by-value, Heap(Non-Primitive): call-by-reference
let mySocial = "devjyotshna"
let anotherName = mySocial
anotherName = "codeaurchai"
console.log(mySocial);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@phonepea"
}
let userTwo = userOne
userTwo.email = "userTwo@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);

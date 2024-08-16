/*let score = "33"

console.log(typeof score );
console.log(typeof (score) );

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
*/

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// "33" is a string but after Number("33") this becomes a number with value 33
// "33abc" is string but after Number("33abc") this becomes a number of value NaN
// "Javascript" is string but after Number("Javascript") this becomes a number of value NaN
// undefined is undefined but after Number(undefined) this becomes a number of value NaN
// null is an object but after Number(null) this becomes a number of value 0 

/**********************OPERATIONS************/
let value = 3
let NegValue = -value
// console.log(NegValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%2);

let str1 = "hello"
let str2 = " umeed"
// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);  // gives 122
// console.log(1 + 2 + "2");  // gives 32

// console.log(true);
// console.log(+true);
// console.log(+"");

let age = 25
console.log(++age);

let gameCounter = 100
console.log(gameCounter++);
console.log(gameCounter)
// 26
// 100
// 101

// link : https://tc39.es/ecma262/2023/multipage/abstract-operations.html#sec-type-conversion
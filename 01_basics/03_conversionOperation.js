/*let score = "33"

console.log(typeof score );
console.log(typeof (score) );

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
*/

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// "33" is a string but after Number("33") this becomes a number with value 33
// "33abc" is string but after Number("33abc") this becomes a number of value NaN
// "Javascript" is string but after Number("Javascript") this becomes a number of value NaN
// undefined is undefined but after Number(undefined) this becomes a number of value NaN
// null is an object but after Number(null) this becomes a number of value 0 
const name = "example"
const repoCount = 35
//console.log(name + repoCount + "Value");  old declaraction syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // strign interpolation

const gameName = new String('Java-script')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0, 4)
console.log(newString);
console.log(gameName.slice(-10, -4));

const newStringOne = "      whitespaces        "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://example.com/example%20page"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'))
console.log(gameName.split('-'));


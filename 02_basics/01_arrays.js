// arrays

const arr = [0, 1, 2, 3, 4, 5, true, "going through"]
const myHeros = ["shaktiman", "naagraj"]

const arr2 = new Array(1, 2, 3, 4)
// console.log(arr[1]);


// Array methods

// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(19) //add in the front
// arr.shift()  //delete fron the front
// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// const newArr = arr.join()
// console.log(arr);
// console.log(newArr);

// slice, splice

console.log("A ", arr);

const myn1 = arr.slice(1, 3) // returns copy of the array within the range
console.log(myn1);
console.log("B ", arr);

const myn2 = arr.splice(1, 3) // manipulates og array
console.log(myn2);
console.log("C ", arr);

// var c = 300//problem
let a = 300
if (true){
    let a = 15
    const b = 25
    // console.log("INNER: ", a);
}
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];  
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "loren"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "example"
    if(username === "example"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username)

// ******************* Interesting ******************
console.log(addOne(6))
function addOne(num){
    return num + 1
}

console.log(addTwo(7))  // Hoisting
const addTwo = function(num){
    return num + 2
}

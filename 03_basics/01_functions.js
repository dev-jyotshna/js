function sayMyName(){
    console.log("J");
    console.log("Y");
    console.log("O");
    console.log("T");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username  = "sam"){
    if(!username){
        console.log("Please enter a usersame");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Jyotshna"))
// console.log(loginUserMessage("Jyotshna"))


function calculateCartPrice(val1, val2, ...num1){ //rest operator -> depends on use case
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "example",
    prices: 456
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)

handleObject({
    username: "Samuel",
    price: 399
})

const myArray = [200, 400, 800, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([400, 550, 110, 310]));

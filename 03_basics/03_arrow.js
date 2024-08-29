const user = {
    username : "loren", 
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`); // this refers to current context
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} in node environment
        // *windows in browser*

// function thisOutput(){
//     let username = "example"
//     console.log(this.username); // can't use this in functions but can use it in objects
// }
// thisOutput()

// const thisOutput = function () {
//     let username = "example2"
//     console.log(this.username);
// }

// ^^^^ ARROW function ^^^^^

// const thisOutput = () => {
//     let username = "example2"
//     console.log(this);
// }
// thisOutput()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  // Implicit return arrow function

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4));

const addTwo = (num1, num2) => ({username : "Remora"})  // object is also return only when it is in ()

console.log(addTwo(3, 4));

const myArray = [2, 3, 5, 6, 7, 8]
// myArray.forEach(() => ())
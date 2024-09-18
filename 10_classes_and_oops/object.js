function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)// by default sets some context -> it is the 'this' of above function & properties

function createUser(username, score){
    this.username = username
}

createUser.prototype.increment = function(){
    this.score++;
}

const chai = createUser("chai", 25)
const tea = createUser("tea", 250)
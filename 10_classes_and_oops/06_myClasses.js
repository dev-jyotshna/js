// ES6

/* 
class User {
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword(){
    return `${this.password}xyz`
  }
  changeUsername(){
    return `${this.username.toUpperCase()}`
  }
}
const temp =  new User("chai", "chai@example.com", "123")
console.log(temp.encryptPassword());
console.log(temp.changeUsername());
*/

// Behind the scene
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}


User.prototype.encryptPassword = function(){
  return `${this.password}xyz`
}

User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
}

const tea =  new User("tea", "tea@example.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
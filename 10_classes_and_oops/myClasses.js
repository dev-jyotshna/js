// ES6

class User {
  constructor(username, email, password){
    this.username = username;
    this.email == email;
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

/* Behind the 

function SetUsername(username){
  // complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password){
  SetUsername.call(this, username)// call used to holds the reference in `this` of createUser instead of SetUsername fn since it will disappear soon after
  
  this.email = email
  this.password = password
}

const chai = new createUser("chai", "chai@exapmle.com", "123")
console.log(chai);
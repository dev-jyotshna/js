// Goal
// let myName = "cassandra      "
// let myShoe = "puma"

// console.log(myName.trueLength()); // trueLength() -> gives length w/o the spaces

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "lightning",
  spiderman: "spider-sense",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}
Object.prototype.cassandra = function(){
  console.log(`prototype is present is all objects`);
}

// heroPower.cassandra()
// myHeros.cassandra()
// myHeros.heyjs()
// heroPower.heyjs()// doesn't give heyjs() 

// PROTOTYPAL INHERITANCE

const User = {
  name: "user",
  email: "user1@example.com"
}

const Teacher = {
    maleVideo:true
  }

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport // links to TeachingSupport object 
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Tim     "
String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Don".trueLength()
"iceTea".trueLength()

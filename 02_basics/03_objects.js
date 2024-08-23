//singleton
//Object.create

// object literals - no singleton(mutiple instances)

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name : "Constance",
    "full name" : "Constance Galgotia",
    mySym : "mykey1",
    [mySym2] : "mykey2",
    age: "24",
    location : "Surat",
    email : "contance@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym2]);
// console.log(typeof JsUser[mySym2]);

// JsUser.email = "assistant@chatgpt.com"
// console.log(JsUser.email);

// Object.freeze(JsUser) 
// JsUser.email = "reluctant@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

//console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


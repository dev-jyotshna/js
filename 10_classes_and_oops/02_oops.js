//Object Literal
const user = {
    username: 'Cristina',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got the user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
        // {
        //     username: 'Cristina',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        // }
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // {}

//CONSTRUCTOR FN -> NEW

// const promiseOne = new Promise() 
// const date = new Date()
// new is a constructor function allows to make new instances using the same object literal

function User(username1, loginCount, isLoggedIn){
    this.username = username1;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = () => console.log(`Welcome ${this.username}`);

    return this
}

const userOne = new User("Flora", 12, true)
const userTwo = new User("Sakura", 18, false)// new used to not overwrite old values
console.log(userOne.constructor);
// console.log(userTwo);

// Immediately Invoked Function Expressions (IIFE)

(function db(){  // Named IIFE
    console.log(`DB CONNECTED`);
})();
// iife is used for avoid global scope pollution

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )()  // not working bcuz doesn't know when to stop , use ';'

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Nupesh') 
const accountId = 144554
let accountEmail = "example@google.com"
var accountPassword = "12345"
accountCity = "Chandigarh" // Not prefered but variable can be usable
let accountState;  // gives undefined

//accountId = 2 // not allowed
accountEmail = "dd@jk.com"
accountPassword = "1238696"
accountCity = "Bangaluru"

console.log(accountId);
/*
Prefer not to use var
beacause of issue in block scope  and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
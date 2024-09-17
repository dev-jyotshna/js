// create promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async tsk
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000);
});

// promise consumption
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "user1", email: "user1@example.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Jyotshna", password: "123456"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
}) 

promiseFour.then((user) =>{// resolve callback hell
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){ // catches error gracefully
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Cressent", email: "cressent@example.com"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// async function consumePromiseFive(){  // async await doesn't handle error directly
//     const response = await promiseFive
//     console.log(response);
// }
async function consumePromiseFive(){  // async await with try catch
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // took more time to get response
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => { console.log(data);})
.catch((error) => console.log(error)) 


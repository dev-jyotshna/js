const myNums = [1, 2, 3]

// const total = myNums.reduce(function (acc, curVal) {
//     console.log(`acc : ${acc} and curVal : ${curVal}`)
//     return acc + curVal
// }, 0)

const total = myNums.reduce( (acc, curVal) => acc + curVal, 0)

// console.log(total);


const shoppingCart = [
    {
        itemName : "js course", 
        price : 2999
    },
    {
        itemName : "py course", 
        price : 999
    },
    {
        itemName : "mobile development course", 
        price : 5999
    },
    {
        itemName : "data science course", 
        price : 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
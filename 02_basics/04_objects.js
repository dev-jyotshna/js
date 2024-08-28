// const tinderUser = new Object() // singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "example@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Jyotshna",
            lastname: "Trivedi"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4} // spread
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // return type array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "JS",
    price : "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor); //hitesh

const {courseInstructor : instructor} = course// object de-structure
console.log(instructor); // hitesh

const navbar = ({company}) => {
    
}

navbar(company = "hitesh" )

//API
//JSON strcuture
// {
//     "name": "hitesh",
//     "coursename": "JS", 
//     "price" : "free"
// }

[
    {},
    {}, 
    {]}
]
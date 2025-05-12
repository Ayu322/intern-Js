// const tinder = new Object() 

const TinderUser = {}

TinderUser.id = "145cvd"
TinderUser.name = "ram"
TinderUser.email = "ram@gmail.com"

// console.log(TinderUser);


const regularUser = {
    name: "ayush",
    fullname: {
        userfullname: {
            firstname: "Ayush",
            lastname: "Dubey"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1 , obj2 )
const obj3 = {...obj1, ...obj2}

//console.log(obj3);

// console.log(TinderUser);

// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));

const course = {
    coursename: "Javascript",
    price: 999,
    courseInstructor: "Ayush"
}


const {courseInstructor} = course
console.log(courseInstructor);

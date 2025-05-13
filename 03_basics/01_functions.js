function sayMyName () {
    console.log("A");
    console.log("Y");
    console.log("U");
}

// sayMyName()

function addTwoNumber (num1 , num2 ) {
    // let result = num1 + num2
    // return result

    return num1 + num2
} 


let result = addTwoNumber(4 , 5)

// console.log("result: ", result);


function loginUserMessage (username) {
    if (!username){
        console.log("Please Enter Your Name");
        return
        
    }
   return `${username} is logged in`
}

// console.log(loginUserMessage("ayush"));

//... is rest operator which is used to take mutiple aruguments at a time && ... is also a spread operator

function calculateCartPrice (...number) {     
    return number
}

// console.log(calculateCartPrice(4000, 524, 6897));


function calculateCartPrice ( val1, val2,  ...number) {     
    return number
}

// console.log(calculateCartPrice(4000, 524, 6897));


const user = {
    Bookname: "Javascript",
    price: "999"
}


function UserHandle (anyobject){
    console.log(`${anyobject.Bookname} is the book & ${anyobject.price} is the price`);
    
}


// UserHandle(user)
// UserHandle({
//     Bookname: "Node.js",
//     price: "1199"
// })



const Arr = [400, 320, 598, 785, 900]

function returnSecondArray (getArray) {
    return getArray[3]
}


console.log(returnSecondArray(Arr));

console.log(returnSecondArray(
     array = [895, 256, 125, 789, 2365, 159]
));

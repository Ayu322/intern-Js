//singleton
//object.create

//object literals
const mysym = Symbol ("key1")
const JsUser = {
    name: "Ayush",
    "full name": "Ayush Dubey",
    [mysym]: "mykey1",
    location: "ahemdabad",
    email: "ayush@gmail.com",
    isloggedin: false,
    lastloggedin: ["monday", "saturady"]
}


// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);
// console.log(typeof JsUser[mysym]);

JsUser.email = "ayush@chatgpt.com"
// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello Js User");
    
}

console.log(JsUser.greetings());


JsUser.greetingsTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
    
}

console.log(JsUser.greetingsTwo());

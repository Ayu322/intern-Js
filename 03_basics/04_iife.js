// Imedaitely Invoked Function Expression (IIFE)

// when we want to counter the problem of global pollution we have to use IIFA so that our funcrion can 
// invoked 

(function one () {
    console.log("ayush");
    
})();

// ()()

( () =>{
    console.log("lion");
    
})()
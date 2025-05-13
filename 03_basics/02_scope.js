function one () {
    const username = "ayush";
    function two () {
        const website = "scope";
        console.log(username);
        
    }
    // two()
    // console.log(website);
}

one()

// in nested scope parents cannot access the property of the child that's why when we want to print website 
// in function it threw error
// It is not the global scope 
function a(){
    var b=10;
    c()
    function c(){
        console.log(b)
    }
}

a();
// console.log(b) // will return undefined.

// 1. The Global execution context is created for the JavaScript file and put it inside the call stack. 
// 2. Execution context of function a will be created and put it about the global execution context. Even the execution context of the function a will be connected to global execution context memory. 
// 3. Then b is defined as 10 
// 4. Then another execution context of the function C is created and put it above the execution context of Function a. Now function c execution context will find the value of variable but it will be unable to find the value of variable in execution context of function c and as we know that all execution context are connected to each other in the lexical order. Hen it will find the value of variable B in the execution context of function A and. And it find the value of variable b as 1- hence it console.logs it. 
// 5. Act is that there is it scope chain between every execution context in alexical order. Which helps the function to access it's Global variables 
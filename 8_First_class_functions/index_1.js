a(); // a is called
b(); // error because function expression is not hoisted . b conatins undefined and you cannot run it as a function.


// function statement or  function declaration.
function a(){
    console.log('a is called');
}

// function expression
var b = function (){ // you can call the function expression after creating it.
    console.log("b is called");
}



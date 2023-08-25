// function along with it's lexical scope forms a closure

function x(){
    var a = 7;
    function y(){ // function y is tied to it's lexical scope variables
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z);
z();

// When we return a function y from inside a function x then what is returned is not only the function body but also the function lexical scope variables.
// so a closure is returned which consist of function + lexical scope variables.
// the closure will contain all the vaiables like a , it is a memory block separate from global memory.

//the return statement can also be written direclty. like

function x(){
    var a = 7;
    return function y(){
        console.log(a)
    }
}

var z = x();
//this is also same
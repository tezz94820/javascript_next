// FIRST_CLASS Function / FIRST_CLASS_CITIZENS

// the ability  of the funcyions to be passed as arguments and return from another functions is called as first class functtions.

function a(param1){
    console.log(param1);
}

a(function (){

});
//we can pass the functions as arguments.

function c(){
    return function (){
        console.log("returnrf") // we can return the functions from snother functions.
    }
}
// callback functions is when we pass one function inside another function.
setTimeout(() => {
    console.log("timer");
}, 5000);
function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("Y")
}) // here y is a callback function.

// javascript is single threaded synchrounous language.

// But through callback function we can enter the asynchronous functioningn of javascript.

// we should never block our main thread . that means all the functions which can take a lot of time we can put them in async calls.

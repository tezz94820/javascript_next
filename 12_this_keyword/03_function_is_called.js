// this keyword value changes on the basis of how the function is called.

"use strict";

function x() {
    console.log(this); 
}

x(); // undefined
// window.x();  ---> consolelogs --> // window object 
// so the upper code will not work in nodejs because window is not a global object and .
// in browser x gets attached to window object so console.log(window.x) will log it.
// but in nodejs x will not get attached to global object and console.log(global.x) will give error.


//In javascript hoisting means moving all the declarations to the top.

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

console.log(x)//output = undefiend
console.log(getName) // output :- complete function in string

function getName(){
    console.log("Hello Everyone")
}

var x;

// in this code first the the global context will be created In x has the value undefined and getName is assigned as complete function in the form of string
// /Write the time of output x when code is executed we want to print the value of x and we know that at the time of memory execution the x as the value as undefined. So the value of x is undefined. The value of get name is the complete function in string format
//https://www.w3schools.com/js/js_hoisting.asp



//////////////////////////////////
// For Arrow Function

console.log(getName2) // undefined
var getName2 = () => {
    console.log("Hello India")
}

//Time the getName2 is a function expression so getName2 will be assigned as a variable so it is assigned the value as undefined. So if you try to print the getName2 then you will get undefined


///////////////////////
// same for function expressions you will get undefined

console.log(getName3) //undefined
var getName3 = function () {
    console.log("Hello everyone")
}


//this will cause code error because no hoisting is applied when you are using let and const keywords
console.log(names)
let names = "tejas"

//to solve hoisting problem we just shifted to let and const
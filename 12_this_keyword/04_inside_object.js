// this keyword inside object.

// Difference b/w a function and method is :- when you decalre a function inside a obj then it becomes mehtod.
const obj = {
    a: 10,
    x: function () {
        console.log(this);
    }
}

obj.x(); // here this keyword becomes the obj which is the parent.

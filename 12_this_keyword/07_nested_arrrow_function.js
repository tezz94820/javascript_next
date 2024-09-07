const obj = {
    a: 10,
    x: function () {
        const y = () => {
            console.log(this);
        }
        y();
    }
}


obj.x();  // this keyword points to obj object 

// this of y arrow function is the this of x method. y is just inheriting this keyword from x method.
// and this of x method point sto it's parent -> obj object.

// so always remember this keyword always takes value of enclosing lexical context inside arrow function or in simple sense it is parent's this keyword.


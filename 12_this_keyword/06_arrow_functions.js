// arrow function does not have their own this keyword. they take/inherit this keyword from their lexical environment/parent.

const student1 = {
    name: "Tejas",
    printName: () => {
        console.log(this)
    }
}

student1.printName(); // {} - global object
// so here arrow function does not have this keyword so it inheits this keyword from it's parent/
// so this of printName points to this of it's parent. and this of parent points to global object/window.


// call apply and bind can be used to reuse the methods/functions from one object to another object by replacing this keyword.

const student1 = {
    name: "Tejas",
    printName: function () {
        console.log(this.name)
    }
}

student1.printName(); // Tejas //b/c this points to student1 object

const student2 = {
    name: "Prajwal"
}

// student2.printName(); // undefined // b/c student2 does not have printName function.
student1.printName.call(student2); // "prajwal" 

// by using call  we said to replace the value of this keyword in printName function to bind/point to student2 object.


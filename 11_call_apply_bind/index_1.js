let name1 = {
    firstname: "Tejas",
    lastname: "Itankar",
    printFullname: function() {
        console.log(this.firstname + " " + this.lastname);
    }
}

name1.printFullname(); // here printfullname is the  the function in name1 object.

let name2 = {
    firstname: "Krish",
    lastname: "Panchal",
}

// name2.printFullname(); // here printfullname is not present in the name2 object. so it will return typeError.
// we can borrow the function from one object and call it from another object.
name1.printFullname.call(name2) // function of name1 applied on name2


// but usually we define the function being used by both the object outside. 
// see in index_2.js
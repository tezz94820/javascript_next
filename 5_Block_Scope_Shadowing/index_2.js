// let and const are block scoped.
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(a); //10
console.log(b); // reference error / program breaks;
console.log(c);


//initial
// Block:-b:undefined,c:undefined
// Global :- a:undeined

//within  Block
// Block :- b:20,c:30
// Global :- a:10

//after block
// Block :- null   
// Global :- a:10

// let and const are not stored in global objext.
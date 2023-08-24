var a = 100;
let b = 200; 
const c = 300;

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}

console.log(a); //10
console.log(b); //200
console.log(c); //300


// when we write a outside the block or inside the block it is pointing to same memory location on global object.
// But b outside and c outside the block are in the different script scope which is different from block and global scope.
// so when you access the a outside block it's vlaue will be changed . but b and c values are not changed b/c b,c in block were hving 20,30 values but 
//there is another b,c in the script scope having values 200,300.

//shadwoing is this when a same name variable is decalred already and inside the block as well .then inside variable shadows the outer variable.



// Illegal shadowing

var p = 10;
{
    var p = 10; //posiisble
}

// __________________

let q = 100;
{
    var q = 100; // not posiisble
}

//_____________________
let r = 100;
{
    let r = 100; // not posiisble
}

//__________________
const s = 200;
{
    const s = 78; //possible
}

// ______________
const m = 400;
{
    let m =344 // possible
}
//_____________
const l =0;
{
    var l = 68; // not possible
}


// illegal shadowing is when let and const are shadowed with var keywords.
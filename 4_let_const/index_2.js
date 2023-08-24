console.log(a);
let a = 10;
var b = 10;

// here temporal dead zone is the time peroid between the decalration of let and const variable and its initazation.
//so here a was in temporal dead zone until line 2. henece we will get reference error. 

// Reference error :- it is given when the memory is not yet allocated for any variable


// ####################
// console.log(x); // gives reference error b/c x is not decalred uptill now.
// ############
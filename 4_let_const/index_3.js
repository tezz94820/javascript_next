let a = 10;
var b = 100;

console.log(window.b); //100  // this will give 100 // do not work on node js b/c window is not the global object in node.
console.log(window.a); // undefined
console.log(this.b) // 100
console.log(this.a) // undefined


//we can redclare var again and agian without any syntax error
//no redclaration is allowed for let and const. it gives syntax error and no code will be executed.
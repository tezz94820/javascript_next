//named function expression.
var a = function xyz(){
    console.log("Tejas");
}

xyz(); //this will give error b/c xyz is a local scope function . it is not assible in global space.
a();


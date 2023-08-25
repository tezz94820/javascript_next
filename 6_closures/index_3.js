function z(){
    var a = 100;
    function x(){
        var b = 200;
        function y(){ 
            console.log(a + " " + b);
        }
        y();
    }
    x()
}

z();

//here there will be 2 closures 
// closure z :-  a=100;
// closure x :-  b=200;
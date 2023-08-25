// closures can be used for data hiding

function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();

//result
//1
//2

// here  count varaible is only assible to function incrementCounter and not in the global scope.
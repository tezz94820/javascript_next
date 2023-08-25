function x(){
    var i = 1;
    setTimeout(() => {
        console.log(i)    
    }, 3000);
    console.log("Tejas");
}

//result
// Tejas
//1

// this is because settimeout is a async function and it runs after the synchronous function or at last. after execution of all code.
// but settimeout has the closure consisting of variable i.

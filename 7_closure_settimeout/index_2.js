// you have to make a function on once calling it it will print 1  after 1 sec , 2 after 2 sec and so onn uptill 6.

function x(){
    for(var i=1;i<=6;i++){
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
}
x();

//result
// 7
// 7
// 7
// 7
// 7
// 7

// this is b/c first all the for loops are run and one by one the async funcction settimoue is added to event loop and at end all synchrounous code is run the settimout are run but at that time the val
// value of i becomes 7.

// here it is var variable so it has a global scope once changed it is changed for all 
 

// Await


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise returned value1");
    } , 5000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise returned value2");
    } , 10000);
})


async function handlePromise(){
    console.log("hello world");

    const val1 = await p1;
    console.log("Namaste Javascript");
    console.log(val1);

    const val2 = await p2;
    console.log("Namaste Javascript");
    console.log(val2);
}

handlePromise()


// output 
// hello world
// Namaste Javascript
// Promise returned value
// Namaste Javascript
// Promise returned value

// so let us understand how async await works behind the scenes.
// await will tell the javascript to stop and wait till this promise gets resolved. 


// here in this code
// first handleFunction will enter the  call stack. then hello word will be printed.
// then the promise p1 will be  will be resolved and it takes 5seconds to be resolved.
// at the time javascript receives the await keyword it discontinues the progream and remove it from call stack 
// the function will be stored somewhere elese in the event loop and once that promise is ressolced the handlefunction is brought back to call stack.
// now when p1 is resolved after that javascript engine agains sees await in front of p2 promise. it again discontinues handle function and remove it from call stack . 
// after p2 promise is resolved after 5 seconds because 5 seconds have already elapsed. settimout always counts the time from start.
// after promise p2 is reolved  the function finishes and over .



// let us say p1 has 10 seconds delay and p2 have 5 seconds delay . then p1 promise will be resolved in 10 seonds and after that very quickly p2 promise will also be resolved because already 10 seonds have been elapsed.



// if you try to make a handle function which calls p1 only 2 times then nothing will print and after 
// 5 seconds both p1 proises will be resolved and returned back.

// Await


const p = new Promise((resolve, reject) => {
    resolve("Promise returned value");
})
async function handlePromise(){
    const val = await p;
    console.log(val);
}

//older way
async function handlePromise2(){
    const val = await p;
    console.log(val);
}

handlePromise()
handlePromise2()
//await can only be used inside async function.
// await will be used only infront of promise.
// await helps to resolve the promise.
// like we use to do .then chaining we will now do it with await.

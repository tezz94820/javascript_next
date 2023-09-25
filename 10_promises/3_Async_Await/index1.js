// Async 


const pro = new Promise(function(resolve, reject) {
    resolve("Promise returned value");
});


async function getData() {
    return pro;
}

async function getData2() {
    return 'Promise returned value2'; //even though it returns promise with this string embedded in it.
}

getData().then( (res) => console.log(res))
getData2().then( (res) => console.log(res))


//async is used to make any function asynchronous function.
// wherver we use async keyword the function will always return a promise. if we try to return a non promise value from that function then automatically javascript will embed it inside a promise and send it

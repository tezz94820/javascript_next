const cart = ["shirt", "pant","shoes"]

//promise consumption
const promise = createOrder( cart );
console.log(promise);

promise
    .then( function (orderId) { // promise chaining on success
        console.log(orderId);
    })
    .catch( function (err) { // promise error handle
        console.log(err.message);
    })



//promise producer
function createOrder(cart) {
    const pr = new Promise( (resolve, reject) => { // creating a new promise
        if(!validateCard(cart)){
            const err = new Error("Invalid cart")
            reject(err); //reject
        }
        const orderId = '12345'
        if(orderId){
            setTimeout(() => {
                resolve(orderId);// resolve after 5 seconds
            }, 5000);
        }
    }) 

    return pr; //returning a promise
}


function validateCard(cart) {
    return true; 
}
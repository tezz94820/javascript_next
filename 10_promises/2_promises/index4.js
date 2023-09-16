const cart = ["shirt", "pant","shoes"]

const promise = createOrder( cart )
    .then( function (orderId) { 
        console.log(orderId);
        return orderId; 
    })
    .catch( function (err) {    //catch will only catch the errors of all the callbacks above it. 
        console.log(err.message);
    })
    .then( function (orderId) { 
        return proceedToPayment(orderId); 
    })
    .then( function (paymentInfo) { 
        return console.log(paymentInfo);
    })
    .catch( function (err) { 
        console.log(err.message);
    })



//promise producer
function createOrder(cart) {
    const pr = new Promise( (resolve, reject) => { 
        if(!validateCard(cart)){
            const err = new Error("Invalid cart")
            reject(err); 
            return ;
        }
        const orderId = '12345'
        if(orderId){
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    }) 

    return pr; 
}


function validateCard(cart) {
    return false; 
}


function proceedToPayment(orderId) {
    return new Promise( (resolve, reject) => {
        resolve("Payment Successful");
    })
}
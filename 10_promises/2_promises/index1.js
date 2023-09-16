const cart = ["shirt", "pant","shoes"]

//this is call back hell
api.craeteOrder( cart , function (){
    api.proceedToPayment( function (){
        api.showOrderSummary( function (){
            api.updateWallet();
        })
    });
})

// promises chaining
api.craeteOrder( cart )
    .then( () => api.proceedToPayment()) // here everytime we did not need to write 'return' b/c it is arrow function but if you are writing fucntion by using function leyword then always return or else next chained function will not get the upper chained data.
    .then( () => api.showOrderSummary())
    .then( () => api.updateWallet());


// promises are the objects which represents the eventual completion (or failure) of an asynchronous operation.
//promise has 3 states. :- 'prending', 'rejected', or 'fulfilled'.
// the  promise will first be assigned undefined untill the asynchrouns function is completed.
// wheen the promise is fulfilled then promise object has the response property which stores the data.

//it is nothing but a simplw objct which is going to be filled when the asynchrounous function gets completed and
// and all the chained .then will be called .

// the IOC problem is solved  b/c we have the control on the promise and it is sure that the callback functions written in .then will execute once.

// in promises are unmutable . you can never change the value in promise once it is returned.

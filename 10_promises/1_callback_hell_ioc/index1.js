const cart = ["shirt", "pant","shoes"]

api.craeteOrder( cart , function (){
    api.proceedToPayment( function (){
        api.showOrderSummary( function (){
            api.updateWallet();
        })
    });
})

//we need to do payment after creating order and then show summaor and then update wallet . this is to be done in order.
// so what we do is put the 2nd function in the callback function in 1st function . and similarly put the 3rd fucntiona as a callback in 2nd function.
// thi type of code grows horizontally and not vertically .

//callbackHell :- when we call one callback in the other fi=unctiona dn make a chaijn in that order .is called as callback hll.
// it becomes very difficult for the developers to understand the code.

// (IOC) inversion of code :- this says that one function is toatlly dependent on the parent function.so payment is toally dependent on createorder function . it should not be the case.
// if any problem in crateorder function then payment will be stopeed abruptly.

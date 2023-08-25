function Counter(){ //this is a constructor function.
    var count = 0;
    this.incrementCounter = function (){
        count++;
        console.log(count);
    }
    this.decrementCounter = function (){
        count--;
        console.log(count);
    }
}

var counter1 = new Counter(); // in constructor funtion we need to use the new keyword.
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();


//result
// 1
// 2
// 1


//eeven here due to construcotrs the data privacy is there. 
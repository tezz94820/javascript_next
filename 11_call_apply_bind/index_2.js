let name1 = {
    firstname: "Tejas",
    lastname: "Itankar",
}

let printFullname =  function(city,state) {
    console.log(this.firstname + " " + this.lastname + " " + city + " " + state);
}
let name2 = {
    firstname: "Krish",
    lastname: "Panchal",
}


//call :- we can pass the arguments to function separated by comma , the first argument is the oveall object which 'this' will be replaced with
console.log('call')
printFullname.call(name1,'Mumbai','Maharashtra'); 
printFullname.call(name2,'Pune','Maharashtra');

//apply :- same as call , just argunets are passed in the array
console.log('apply')
printFullname.apply(name1,['Mumbai','Maharashtra']); 
printFullname.apply(name2,['Pune','Maharashtra']);

// bind :- this binds my separated function with the name object and returns me the function which i can call anytime
console.log('bind')
const printcall = printFullname.bind(name1,'Mumbai','Maharashtra'); // this returns a function
printcall();



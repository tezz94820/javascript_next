function x(){
    for(var i=1;i<=6;i++){
        function close(x){
            setTimeout(() => {
                console.log(x);
            }, x*1000);
        }
        close(i);
    }
}
x();


//whta we did here is utilized closures to solve the problem.
// we made a function named close which has a closure with unique variable as i  so everytime there will be a unique i everytime.
  
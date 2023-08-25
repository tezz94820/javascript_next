// to correct it just use let inspite of var .  

function x(){
    for(let i=1;i<=6;i++){
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
}
x();

//let has a block scope so everytime there will be a new variable for each block. that means i=1 is different from i=2 due to change in block.


// if you have to do it by using var keyword then index_4.js

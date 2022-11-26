//HOF:- function which take function as a parameter is called higher order function .

setTimeout(function() {
    console.log("hello")
}, 3000); 

//the function which is passed inside HOF  is called callback function. 

function display_sum(num1,num2,display){
    let sum=num1+num2;
    display(sum);
}
function display(num){
    console.log(num);
}
display_sum(3 ,4,display)  

// setInterval(function(){               //it is also HOF which take function as argument 
//     console.log("hello world");
// },1000);
//this function will not stop it will run after every second 
//to stop this we use clearinterval();
let interval=setInterval(function(){
    console.log("surya");
},5000);
//clearInterval(interval);
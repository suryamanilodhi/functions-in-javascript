//pure  function:which take some parameter and return something from it pure function does not access any data from outside;
function sum(num1,num2){
    var add=num1+num2;
    return add;
}
console.log(sum(2,4));



function factorial(num){
    let  fact=1;
    for(var i=1; i<=num; i++){
        fact*=i;
    }
    return fact;
}
console.log(factorial(5)); 



function multiplication(num1,num2){
    return num1*num2;
}
console.log(multiplication(2,4));



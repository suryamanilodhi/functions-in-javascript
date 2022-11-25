//ARROW FUNCTION: difference between arrow function and normal function.is :-
//normal function has this but arrow function handlle this by itself. 

let sum=(num1,num2)=>{
    return num1+num2;
}
console.log(sum(3,4));


let factorial=(num)=>{
    let fact=1;
    for(var i=1; i<=num; i++){
        fact*=i;
    }
    return fact;
}
console.log(factorial(5)); 

//short form to declare arrow function.
// if we have to pass only one argument then we can remove paranthesis.
let username=name =>{
     return name;
} 
console.log(username("suryamani"));

//if we have one sentance  for return  then we can also remove curly braces. and after that we put it in single  line then return also remove

let employee=salary=>salary; //this is the most sort form of arrow function used.
console.log(employee("54000"))

//double any number by using arrow function in single line
let double=num=>num*2;
console.log(double(20));
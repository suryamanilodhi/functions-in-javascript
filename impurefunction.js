//impre function is a function which does not take any parameter and does not return anything it can take value outside the function.
n=3;
n=4;
function factorial(){
    
    fact=1
for(let i=1; i<=n; i++){
    fact*=i;
}
console.log(fact);
}
n=8;
(factorial())
//if impure function does not  return  any thing then by default it return undefined.

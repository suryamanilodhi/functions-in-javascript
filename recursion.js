//recursion:- function calling itself it called recursion
//this is infintite loop.
// for(let i=0; i<=0; i--){
//     console.log("hello")
// }

//recursion just work like infinite loop
// function print_Surya(){
//     console.log("surya");
//     print_Surya();
// }
// print_Surya()

function print(num){
    if(num==10){
        return
    }
    console.log("hello",num);
    print(num+1);
}
print(1);
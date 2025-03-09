class human{}
const object1 = new human();
const obj1 = new human();
class human{}

//function as arguement
function greetMe(greet, fullname){
    console.log("hello",fullname);
    greet()
}
function greet(){
    console.log("Good morning tp you");
}
greetMe(greet, "Ayush");

//return function

function solve(num){
    return function(num){
        return num*num;
    }
}
let ans = solve();
let soln = ans(20)
console.log(soln);
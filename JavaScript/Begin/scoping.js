// global
let age = 25;
console.log(age); //general
{
    console.log(age); // in blocks
}
for(i=0; i>3; i++){
    console.log(age); //in loop
}
if(true){
    console.log(age); //condition
}
function num(){
    console.log(age); //in function
}

//function
function num(){
    var fullname = "Hello family";
    console.log("greetings", fullname);
}
num()
console.log(fullname); //reference error

block
{let age = 28}
console.log(age); //reference error
{const ant = 45;}
console.log(ant); //reference error
{var spa = 50}
console.log(spa); //output 50 no error
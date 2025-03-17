// DAY1

console.log("Hello world");
let ayush = "fud,dc";
console.log(typeof(ayush));
let a = 10;
let b = 20;
console.log(a-b);
console.log(a/b);
console.log(a**b);
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);
console.log(5<10);
let status1 = (a>18) ? 'He can vote' : 'He cant vote';
console.log(status1);
let ans = (true && false);
console.log(ans);
console.log(2<<1);
if(a>18){
    console.log('can vote');
}
else{
    console.log('cant vote');
}


let temp = 3;
switch(temp) {
    case 1: console.log('A'); break
    case 2: console.log('B')
    case 3: console.log('C'); break
    default: console.log('F')
}

// DAY2

// for(let i=1; i<11; i++){
//     console.log(i)
// }
// for(let j=10; j>=1; j--){
//     if(j==4){
//         break;
//     }
//     else{
//         console.log(j)
//     }
// }
// for(i=1; i<6; i++){
//     if(i==4){
//         continue;
//     }
//     else{
//         console.log(i)
//     }
// }
// let i=1;
// while(i<10){
//     console.log(i)
//     i++
// }
// let i=6;
// while(i>1){
//     if(i==3){
//         break
//     } 
//     else{s
//     console.log(i)
//     }
//     i--
// }
let i=6;
while(i>1){
    if(i==3){
        i--;
        continue;
    } 
    else{
    console.log(i)
    }
}

//sttings
let word = 'ayush'
let title = "jha"
let join = word + title;
console.log(join);
console.log( title.length);
console.log(word.substring(2));

//day4
function sayName() {
    console.log("Ayush");
}
sayName()
function count(){
    for(let i=1; i<10; i++){
        console.log(i);
    }
}
count()

function printNum(num){
    console.log("number to be print:", num);
}
printNum(4);

//dual parameter
let avg = function(first, second){
    ans = (first+second)/2;
    console.log(ans);
}
avg(4,7)
let sqr = (base, power) =>{
    let ans = (base**power);
    return ans;
}
console.log('solution', sqr(2,3));
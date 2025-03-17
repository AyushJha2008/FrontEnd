let obj = {
    name: 'Ayush',
    age: 18,
    weight: 64,
    height: "6ft 1in",
    greet: () => {
        console.log("hello buddy");
    }
};
console.log(obj);
obj.greet()
console.log(typeof(obj.greet));
let obj2 = obj;

let arr = [2, 3, 4, 'Ayush', true] //normal method
let brr = new Array(false, 5, 'you')
console.log(typeof(arr));
console.log(arr[3] + brr[0]);
brr.push('konnichiwa');
console.log(brr);
brr.pop(5)
console.log(brr);
arr.unshift(8)
console.log(arr);

console.log(arr.slice(1,4));
let sqrArr = arr.map(sqr => {
    return sqr **2;
})
console.log(sqrArr);

arr.map((element, ind)=>{
    console.log(element);
    console.log(ind);
})
let ans = arr.filter((value)=>{
    if(typeof(value) == 'string'){return true}
    else{
        return false
    }
})
console.log(ans);

let xyz = arr.reduce((acc,curr)=>{
    return acc + curr;
})
console.log(xyz);

arr.sort()
console.log(arr);
arr.forEach((index, value)=>{
    console.log("Element:",index, "Index:",value);
})

for(let val of xyz){
    console.log(val);
}



let crr = [10, 20, 30,40,50]
function getSum(crr) {
    let sum = 0
    let len = crr.length
    for(let index=0; index<len; index++){
        sum = sum + crr[index]
    }
    return sum
}
let total = getSum(crr)
console.log(total);
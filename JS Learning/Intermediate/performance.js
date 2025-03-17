// code 1
const t1 = performance.now();
for(let i=1; i<=100; i++){ //loop
    let para = document.createElement('p'); //element create
    para.textContent = 'this is my para ' + i //element content
    document.body.append(para) //paste
}

const t2 = performance.now();
console.log("total time by code 1: " + (t2-t1));

//code 2

const t3 = performance.now()
let mydiv = document.createElement('div');

for(let j =1; j<=100; j++){
    let para = document.createElement('p');
    para.textContent = 'my new para '+ j + "abc";
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv)
const t4 = performance.now();
console.log('total time by code 2: ' + (t4-t3));
// this code is much faster to execute

// best practice for faster code:

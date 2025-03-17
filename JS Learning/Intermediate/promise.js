let firstPromise = new Promise((resolve, reject)=>
    {setTimeout(function sayName(){
        console.log('my name is ayush');
    }, 15000);
});

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(function sayName() {
        console.log('my name is ayush');
        resolve(); // resolve the promise after logging the message
    }, 15000);
});

firstPromise.then(() => {
    console.log('Promise resolved!');
}).catch(error => {
    console.log('Promise rejected:', error);
});


let promise1 = new Promise((resolve, reject) => {
    let completed = true;
    if(completed) {
        resolve(10);
    } else{
        reject('not fulfilled');
    }
    promise1.then((message)=>{
        console.log('first then', message);
        return 20
    }).then((message)=>{
        console.log('second then', message);
        return 30
    }).then((message)=>{
        console.log('third then', message);
    }).finally((message)=>{
        console.log('finally', message);
    });
});

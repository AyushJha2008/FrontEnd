let src = {
    age:18,
    wt:65,
    ht:180
};
// console.log(obj);
let dest = {...src};
src.wt = 80
console.log(src);
console.log(dest);
// conclusion : different output mean cloned success
let dest2 = Object.assign({}, src)
src.age = 56
console.log(src, dest2);
//for looop cloning
let dest3 = {};
for(let me in src){
    let newME = me;
    let newSOL = src[me]
    dest3[newME] = newSOL
}
src.age = 80;
console.log(dest3);



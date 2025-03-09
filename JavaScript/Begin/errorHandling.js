// let x = 20
try{
    console.log(x);
}
catch(e){
    console.log('your error was',e);
    // e represents the error which occured
}
finally{
console.log('abbe sun: i will run everytime');
}

//custom error
try{
    console.log(x);
}
catch{
    throw new Error('Bhai pehle declare karo fir call karo') 
}
let errorCode = 100;
if( errorCode == 100) {
    throw new Error("Invalid Json")
}
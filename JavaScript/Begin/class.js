class Human{
    //state or property
    #age = 19 // private 
    wt = 64 //public
    ht = 180 //public

    //Behaviour or functionality
    walking(){
        console.log("Iam walking", this.#age);
    }
    running(){
        console.log("Iam running");
    }
    get fetchAge(){
        return this.#age
    }
    set modifyAge(val){
        this.#age = val
    }
}
let obj = new Human();
console.log(obj.ht);
console.log(obj.fetchAge);  //age was private

//only one parameter
function sayName(myName = "Ayush"){
    console.log("My name is:", myName);
}
sayName("Student")

// two parameter
function fullName(first = "AJ", second = 'ASJ'){
    console.log("My name is", first,second);
}
fullName("ayush")

// dependent parameter
function sayName(fName = 'abcd', sName = fName.toUpperCase()){
    console.log('my name is:',sName );
}
// sayName('ayush', 'jha')
sayName()

// defaukt parmeter as object
function solve(value=15){
    console.log("value which was printed:", value);
}
solve(null)
solve(undefined)

// function as parameter
function age(){
    return 19
}
function utility(name='Ayush', num=age()){
    console.log('namaste', name, num);
}
utility() //using default parameter
utility('abc')


//in built object
//Math objects
console.log(Math.max(1,2,3,4,5,13));
console.log(Math.min(1,4,5,7,8));
console.log(Math.round(1.8));
console.log(Math.ceil(1.1));
console.log(Math.floor(1.8));
console.log(Math.sqrt(9));
console.log(Math.pow(2,6));

//Date and time
console.log(Date());

let tarik = new Date(2005, 8, 18, 2)
console.log(tarik.getFullYear());
// tarik.getDay
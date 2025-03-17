async function getData() {
   let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   let data = await response.json();
   console.log(data);
}
getData();


//closure
function outer(){
   let name = 'ayush'
   function inner(){
      console.log(name);
   }
   return inner;
}
let innerFunction = outer();
innerFunction();
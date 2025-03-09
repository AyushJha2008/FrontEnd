let abc = document.getElementById('body');
abc
console.log(abc.style);
abc.style.padding = '2rem'

let xyz = document.getElementById('head1')
xyz.style.cssText = "color: orange; background-color:black; font: calibri"

let pqr = document.querySelector('#body')
pqr.setAttribute('class', 'hehehoho')

xyz.setAttribute('style',"padding:1rem; background-Color: blue; color:orange")
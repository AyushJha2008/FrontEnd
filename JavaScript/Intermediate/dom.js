let mydiv = document.querySelector('#hoho');
let newElem = document.createElement('h2');
newElem.textContent = 'this is me baccha log'
mydiv.insertAdjacentElement('beforebegin', newElem);
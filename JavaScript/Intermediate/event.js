function change() {
    let butt = document.getElementById('button');
    butt.textContent = "bye bye"
}

let butt = document.getElementById('button');
butt.addEventListener('click', change)

let anchor = document.getElementById('abc');
anchor.addEventListener('click', function(event){
    event.preventDefault();
    anchor.textContent = 'done bro'
})

let paras = document.querySelectorAll('p');
function alertpara(){
    alert("you have clicked para:" )
}
for(let i=0; i<paras.length; i++){
let para = paras[i];
para.addEventListener('click', alertpara)}
const filcon=document.querySelector('.filter_icon');

const tblock=document.querySelector('.tblock');
const add_button=document.querySelector('.add_button');
let tadd = document.querySelector(".text");
let play = document.querySelector('.text_input');   
let delete_button = document.querySelector('.delete_button');
let k=0;
function sort_inputs(a,b,d,u){
let tsort = [...tblock.children]; 
tblock.innerHTML = "";
tsort=tsort.sort((c,d) => c.querySelector("input").value > d.querySelector("input").value ? a : b);
tblock.append(...tsort);
filcon.classList.replace(d,u);
}
add_button.addEventListener("click", () => {
tadd = document.createElement("div");
tadd.setAttribute('class', 'text');
play = document.createElement('input');
play.type = "text";
play.setAttribute('class', 'text_input');
delete_button = document.createElement('div');
delete_button.setAttribute('class', 'delete_button');
delete_button.addEventListener("click", (event) => {
event.target.closest(".text").remove();
});
tadd.append(play, delete_button);
tblock.append(tadd);
});
delete_button.addEventListener("click", (event) => {
event.target.closest(".text").remove();
});
filcon.addEventListener("click", () => {
let a="up";
let b="down";
k=k+1;
if(k%2==1){
inputs(1,-1,b,a);
}
else{
inputs(-1,1,a,b);
}
});

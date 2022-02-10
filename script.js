let container = document.createElement('div');

container.className= 'grid-container';
document.body.appendChild(container);
 let parent1 = document.createElement('div');
 document.body.appendChild(parent1);
 parent1.appendChild(container);
 parent1.className = 'parent';

let gr = document.querySelector('.grid-container');

// Add 16 divs
function createGrid(size){
for (let i = 1; i < size*size + 1; i++) {
    const div = document.createElement('div');
    gr.appendChild(div);
    div.className = 'child-container';
    div.style.width = `${100/size}%`;
    div.style.height = `${100/size}%`;
  }
}
createGrid(16);
let ms2 = document.querySelectorAll('.child-container')
ms2.forEach(ms3 => ms3.addEventListener("mouseover",function(e){e.target.style.backgroundColor = 'black'}));

let draw1 = document.querySelector('.draw')
draw1.addEventListener("click",function(){

  let drawOnGrid = document.querySelectorAll('.child-container');
  drawOnGrid.forEach(draw => draw.addEventListener("click", function(e){e.target.style.backgroundColor='black'}));
});



/*function respondToClick(e){
  e.target.style.backgroundColor = 'black';
}
*/

let clearBtn = document.querySelector('.clear1');

clearBtn.addEventListener("click",clearGrid)

function clearGrid(){
let myNode = document.querySelector('.grid-container')
while (myNode.firstChild) {
  myNode.removeChild(myNode.lastChild);
}
 
let input = prompt("Please enter how many cells you want per each side?");

if(input>100){
alert("The max you can enter is 100");
}
else{
createGrid(input);
  let ms = document.querySelectorAll('.child-container')
ms.forEach(ms1 => ms1.addEventListener("mouseover",function(e){e.target.style.backgroundColor = 'black'}));
//let listen = document.querySelectorAll('.child-container');
//listen.forEach(x => x.addEventListener("click", respondToClick));
}
}


let erasex = document.querySelector('.erase');
erasex.addEventListener("click",function(){
  let a = document.querySelectorAll('.child-container');
a.forEach(y => y.addEventListener("click",function(e){ e.target.style.backgroundColor = 'transparent';}));
});





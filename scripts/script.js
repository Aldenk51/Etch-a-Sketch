/**
 * Create a grid of boxes
 */
let toAdd = document.createDocumentFragment();
for(let i=0; i < 16; i++){
  let newDiv = document.createElement('div');
   newDiv.id = "box"+i;
   newDiv.className = "grid"
   toAdd.appendChild(newDiv);
}
document.querySelector('#container').appendChild(toAdd);


/**
 * Add mouseover effect
 */
addEventListener('mouseover', e => {
  if(e.target.matches('.grid')) {
    console.log(e.target.nodeName);
    e.target.style.backgroundColor = "gray";
  }
});

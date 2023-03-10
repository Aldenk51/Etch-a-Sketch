/**
 * Create a grid of boxes with eventListeners hover effect
 */
let toAdd = document.createDocumentFragment();
for(let i=0; i < 16; i++){
  let newDiv = document.createElement('div');
   newDiv.id = "box"+i;
   newDiv.className = "grid"
   newDiv.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = "gray";
   });
   toAdd.appendChild(newDiv);
}
document.querySelector('#container').appendChild(toAdd);
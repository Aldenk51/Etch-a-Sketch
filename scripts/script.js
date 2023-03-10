/**
 * Create a grid of boxes with eventListeners hover effect
 */
let mode = "color";
let toAdd = document.createDocumentFragment();
for(let i=0; i < 16; i++){
  let newDiv = document.createElement('div');
   newDiv.id = "box"+i;
   newDiv.className = "grid"
   newDiv.addEventListener('mouseover', e => {
    switch (mode) {
      case "color" :
        e.target.style.backgroundColor = '#525252';
        console.log(e.target.style.backgroundColor);
        break;
      
      case "rgb" :
        e.target.style.backgroundColor = randomColor();
        break;

      case "darken" :
        console.log("darken good");
        break;

      default:
        break;
    }
   });
   toAdd.appendChild(newDiv);
}
document.querySelector('#container').appendChild(toAdd);

/**
 * Adds event listener to all buttons via containing DIV
 */
document.querySelector('#options').addEventListener('click', e => {
  if(e.target.id == 'setSize') {

  } else {
    mode = e.target.id;
    console.log(mode);
  }
});

/**
 * Generates a random color 0-255 for each rgb value
 */
function randomColor() {
  let color = "#";
  const characters = '0123456789ABCDEF';
  for(let i = 0; i < 6; i ++) {
    color += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return color;
}
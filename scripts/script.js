/**
 * Initialize
 */
let mode = "color";
createGrid(4);
// Adds event listener to all buttons via containing DIV
document.querySelector('#options').addEventListener('click', e => {
  if(e.target.id == 'setSize') {
    let i = prompt("How many blocks per side:");
    if(i) {
      createGrid(i)
    }
  } else if(e.target.id != 'options'){
    mode = e.target.id;
    console.log(e.target.id);
  }
});


/**
 * Generates a random value for each rgb value
 */
function randomColor() {
  let color = "#";
  const characters = '0123456789ABCDEF';
  for(let i = 0; i < 6; i ++) {
    color += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return color;
}


/**
 * @param {Number} r - Red value of color
 * @param {Number} g - Green value of color
 * @param {Number} b - Blue value of color
 * @returns Value of darkened color provided
 */
function darkenColor(r, g, b) {
  return 'rgb(' + r*0.7 + ', ' + g*0.7 + ', ' + b*0.7 + ')';
}


/**
 * Create a grid of boxes with eventListeners hover effect
 */
function createGrid(size) {
  let toAdd = document.createDocumentFragment();
  for(i = 0; i < size**2; i ++) {
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = 'rgb(255, 255, 255';
    newDiv.id = "box"+i;
    newDiv.className = "grid"
    newDiv.addEventListener('mouseover', e => {
      switch (mode) {
        case "color" :
          e.target.style.backgroundColor = 'rgb(82, 82, 82)';
          break;
        
        case "rgb" :
          e.target.style.backgroundColor = randomColor();
          break;
  
        case "darken" :
          e.target.style.backgroundColor = darkenColor(...e.target.style.backgroundColor.match(/\d+/g))
          break;
  
        default:
          break;
      }
     });
     toAdd.appendChild(newDiv);
  }
  const container = document.createElement('div');
  container.id = "container";
  container.appendChild(toAdd);

  document.body.replaceChild(container, document.querySelector('#container'));

  document.querySelector('#container').style.gridTemplateColumns = " auto".repeat(size);
}
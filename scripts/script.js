/**
 * Create a grid of boxes with eventListeners hover effect
 */
let mode = "color";
let toAdd = document.createDocumentFragment();
for(let i=0; i < 16; i++){
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
document.querySelector('#container').appendChild(toAdd);

/**
 * Adds event listener to all buttons via containing DIV
 */
document.querySelector('#options').addEventListener('click', e => {
  if(e.target.id == 'setSize') {

  } else {
    mode = e.target.id;
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

/**
 * @param {Number} r - Red value of color
 * @param {Number} g - Green value of color
 * @param {Number} b - Blue value of color
 * @returns Value of darkened color provided
 */
function darkenColor(r, g, b) {
  return 'rgb(' + r*0.8 + ', ' + g*0.8 + ', ' + b*0.8 + ')';
}
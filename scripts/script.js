var toAdd = document.createDocumentFragment();
for(var i=0; i < 16; i++){
   var newDiv = document.createElement('div');
   newDiv.id = "box"+i;
   newDiv.className = "grid"
   toAdd.appendChild(newDiv);
}

document.querySelector("#container").appendChild(toAdd);


  
  
  let nb= 15;
  let dimX= 0;
  let dimY= 0;

  let margin = 60;

  let x , y;




function setup() {
  createCanvas(windowWidth, windowHeight);
  dimX = (width-2 * margin )/ nb;
  dimY = (height-2 * margin )/ nb;
  background('#002fa7');
  noLoop();
}

function keyPressed() {
  if (key == 'r'){
    background('#002fa7');
    redraw();
  }
  if (key == 's'){
    saveCanvas('myCanvas', 'png');
  }
 
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  dimX = (width-2 * margin )/ nb;
  dimY = (height-2 * margin )/ nb;
  background('#002fa7');
  redraw();
}
  


function draw() {




noStroke();
   
  fill(255)

  for (let j = 0; j < nb; j = j + 1) {
  for (let i = 0; i <  nb; i = i + 1)
  {

x = margin + i * dimX;
y = margin + j * dimY;
// rect (x, y, dim, dim);

let rnd = int(random(0,4));

if (rnd == 0) {


triangle( x + dimX, y,  x + dimX, y + dimY, x, y + dimY);

}
else if (rnd == 1) {


triangle( x, y,  x + dimX, y,  x, y + dimY);
}
else if (rnd == 2) {


triangle( x, y, x +  dimX, y + dimY,  x, y + dimY);

}
else {

triangle( x,  y ,  x + dimX, y, x  + dimX,   y + dimY);

 
  }
}

  }}

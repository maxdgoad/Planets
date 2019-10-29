let sliderGroup = [];
let X = 0;
let Y;
let Z=0;
let h = 20;

function setup() {
  createCanvas(displayWidth/2, displayHeight/2, WEBGL);
	
  //create sliders
  for (var i = 0; i <3; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style('width', '80px');
  }
	
	
 
}



function draw() {
	orbitControl(); //allows for dragging around a point
	
  background(60);
  // assigning sliders' value to each parameters
	
	X+=.01;
	Z+=.01;
	push();
      
  		translate(sin(X)*80, 0, cos(Z)*80);
      
        sphere(10);
      
	pop();

  
  stroke(255);
  fill(255, 102, 94);
  sphere(50);
}

//function mouseDragged() {
	/*
	Z = Z+(height/2 - pwinMouseY)/height;
	X = X+(width/2 - pwinMouseX)/width;
  camera(X, Y, Z, centerX, centerY, centerZ, 0 ,1, 0);
	
	console.log( X + " "  +Y + " " + Z);
	*/
  
 
  //return false;
//}
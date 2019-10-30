let rotateX = 0;
let rotateY = 0;
let rotateZ = 0;

let camRad = 700;

let camX = -1*Math.sin(rotateX)*camRad;
let camY = 0;
let camZ = 1*Math.cos(rotateZ)*camRad;



let orbitX = 0;
let orbitY = 0;
let orbitZ = 0;

let transX = 0;
let transY = 0;
let transZ = 0;


let last = [];

let font;
fontsize = 40;

let word = 0;





function preload() {
  	img = loadImage('assets/flan.jpg');
	back = loadImage('assets/clouds.jpg');
	mars = loadImage('assets/mars.jpg');
	planet = loadImage('assets/earth.jpg');
	
	  font = loadFont('assets/BAUHS93.ttf');

	
}

function setup() {
  	createCanvas(windowWidth, windowHeight, WEBGL);
	setAttributes('antialias', true);
	for(rep = 0; rep< 30; rep++){
		last[rep] = [0,0,0];
	}
	
	textFont(font);
	textSize(fontsize);
  	textAlign(CENTER, CENTER);
	
	frameRate(60);
	
}

function keyDown(){
	
	if(keyIsDown(LEFT_ARROW)){
		rotateX+=.07;
		rotateZ+=.07;
		
		camX = -sin(rotateX)*camRad;
		camZ = cos(rotateZ)*camRad;
		
		
	}
	
	if(keyIsDown(RIGHT_ARROW)){
		rotateX-=.07;
		rotateZ-=.07;
		
		camX = -sin(rotateX)*camRad;
		camZ = cos(rotateZ)*camRad;
		
		
	}
	
	if(keyIsDown(DOWN_ARROW)){
		if(-sin(rotateY) <  .99){
			rotateY-=.07;
			//rotateZ-=.07;
		
			camY = -sin(rotateY)*camRad;
			//camZ = cos(rotateZ)*camRad;
			
		}
		
		
		
		
	}
	
	if(keyIsDown(UP_ARROW)){
		if(-sin(rotateY) > -.99){
			rotateY+=.07;
			//rotateZ+=.07;
		
			camY = -sin(rotateY)*camRad;
			//camZ = cos(rotateZ)*camRad;
			
		}
		
		
	}
	
}

function mouseWheel(event) {
	//console.log(event.delta)
	
	
	
	camX/=camRad;
	camY/=camRad;
	camZ/=camRad;
	
	
	
  	camRad += event.delta/2;
	
	camX*=camRad;
	camY*=camRad;
	camZ*=camRad;
	
	console.log(camRad);
}


function draw() {
	background(0);
	camera(camX + transX, camY, camZ, transX, 0, 0, 0, 1, 0); // first three are camera's xyz, next three are where camera is looking, last three are orthogonal direction? Yes I think so after playing with it for a second ( 0,1,0 is level with xy-plane)
	
	//orbitControl(); //allows for dragging around a point
	
  
  // assigning sliders' value to each parameters
	
	
	
	
	
	orbitX+=.01;
	orbitZ+=.01;
	
	push();
     
		texture(mars);
  		translate(sin(orbitX)*300 + transX, orbitY, cos(orbitZ)*300);
      
        sphere(43, 100, 50);
 
	pop();
	
	
	for(rep = 0; rep< 15; rep++){
		push();
		texture(mars);
		translate(last[rep][0], last[rep][1], last[rep][2]);
		//sphere(20,100,100);
		pop();
	}
	
	
	
	last[Math.floor((frameCount%150)/5) ] = [sin(orbitX)*300  + transX, orbitY, cos(orbitZ)*300]
	
	stroke(255);
	strokeWeight(7);
  	noFill();
	
	
	if(150 < frameCount ){
		beginShape(); 

			for(rep = Math.floor((frameCount%150)/5)+1; rep < 30; rep++){

				curveVertex(last[rep][0], last[rep][1], last[rep][2]);
			}

			for(rep = 0; rep < Math.floor((frameCount%150)/5)+1; rep++){

				curveVertex(last[rep][0], last[rep][1], last[rep][2]);
			}

		endShape();
	}
	
	
	
	
	


	
	transX += 0;
		
  	translate(transX,0,0);
	
	texture(planet);
	sphere(169, 100, 100);
	
	keyDown();
	
	texture(back);
	
	sphere(2000, 100);
	
	
	

	 
   //first three are xyz of camera and next three are where its looking
	if(frameCount%5 == 0){
		
		word = Math.floor(getFrameRate());
		
	}
	fill(255);
	text(word,250,250);
	
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
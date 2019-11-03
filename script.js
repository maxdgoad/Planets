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

let rate = 0;


function preload() {
  
	back = loadImage('assets/clouds.jpg');
	mars = loadImage('assets/mars.jpg');
	planet = loadImage('assets/earth.jpg');
    font = loadFont('assets/BAUHS93.ttf');

	
}

function setup() {
  	cnv = createCanvas(windowWidth, windowHeight, WEBGL);
	setAttributes('antialias', true);
    
    
	for(rep = 0; rep< 30; rep++){ 
		last[rep] = [0,0,0];
	}
	
	textFont(font);
	textSize(fontsize);
  	textAlign(CENTER, CENTER);
	
	frameRate(60);
    
    u = new Universe();
	
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
	
	camX/=camRad;
	camY/=camRad;
	camZ/=camRad;
	
	
	
  	camRad += event.delta/2;
	
	camX*=camRad;
	camY*=camRad;
	camZ*=camRad;
	
}

function draw() {
	background(0);
	keyDown();
	camera(camX , camY, camZ, 0, 0, 0, 0, 1, 0); // first three are camera's xyz, next three are where camera is looking, last three are orthogonal direction? Yes I think so after playing with it for a second ( 0,1,0 is level with xy-plane)
    
    //orbitControl(3,3,3);
    
    
    
    u.draw();
    
    
    /*
    

	orbitX+=.01;
	orbitZ+=.01;
	
	push();
     
		texture(mars);
  		translate(sin(orbitX)*300 + transX, orbitY, cos(orbitZ)*300);
      
        sphere(43, 100, 50);
 
	pop();

	last[Math.floor((frameCount%150)/5) ] = [sin(orbitX)*300, orbitY, cos(orbitZ)*300]
	
	stroke(255);
	strokeWeight(7);
  	noFill();
	
		beginShape(); 

			for(rep = Math.floor((frameCount%150)/5)+1; rep < 30; rep++){

				curveVertex(last[rep][0], last[rep][1], last[rep][2]);
			}

			for(rep = 0; rep < Math.floor((frameCount%150)/5)+1; rep++){

				curveVertex(last[rep][0], last[rep][1], last[rep][2]);
			}
    
        

		endShape();
	
	texture(planet);
	sphere(169, 100, 100);
	*/
    
    
	texture(back);
	sphere(2000, 100);
    

	if(frameCount%5 == 0){
		
		rate = Math.floor(getFrameRate());
		
	}
	
	fill(255);
	
	text(rate, 250, 250);
    
	
}


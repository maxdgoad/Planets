
let bauh;


let word = 0;

let rate = 0; 

var easycam;

let eyeZ;

let x= 0, y= 0, z= 0;

let pos;

let vx=0,vy=0, vw=0, vh=0;

let v;

function preload() {
  bauh  = loadFont('assets/BAUHS93.TTF');
	
  EarthTexture = loadImage('assets/earth2.jpg');
	
  
}       

		/**
         * does things before the program is "shown"
		 * @pre none
		 *		@param none
		 *		@post does things before the program is "shown"
		 * 		@return none
		 */
function setup() {
  	cnv = createCanvas(windowWidth, windowHeight, WEBGL);
	
	
	easycam = createEasyCam();
	
	eyeZ = height / 2 / tan((30 * PI) / 180);
	
	


  // suppress right-click context menu
  //document.oncontextmenu = function() { return false; }
	
    
    slider = createSlider(1, 50, 1);
    slider.class('slider');
	slider.position(windowWidth/2 - 250, windowHeight*.9);
	slider.style('text', 'timescale');
	
	sliderDiv = createDiv('Time Scale');
	sliderDiv.position(windowWidth/2 -95 , windowHeight*.93);
	sliderDiv.style('font-size', '50px');
	sliderDiv.style('color', 'white');
	sliderDiv.style('font-weight', 'bold');
	sliderDiv.style('text-align', 'center');
	
	sliderDiv.center('horizontal');
	
	
	
	
	frameRate(60);
    
    u = new Universe();
	
	textFont(bauh);
  	textSize(100); 
	 
	f = frameRate;
	
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    	
	
	}
	
	else{
		
		button448 = createButton("448 planets (warning)");
	
	button448.mousePressed(manyPlanets);
	button448.position(10,10);
		
	}
}

        /**
         * draws things into the program
		 * @pre none
		 *		@param none
		 *		@post draws things into the program
		 * 		@return none
		 */  
function draw() {
	
	angleMode(DEGREES); //allows angles to be entered in degrees
	
	sliderDiv.html('Time Scale' + ' = ' + slider.value() + 'X');
	sliderDiv.center('horizontal');
	
	
	//background(0);
	//keyDown();
	//camera(camX , camY, camZ, 0, 0, 0, 0, 1, 0); // first three are camera's xyz, next three are where camera is looking, last three are orthogonal direction ( ie, orientation)
    
    //orbitControl(3,3,3);
    
    u.draw();

	if(frameCount%50 == 0){

		word = Math.floor(getFrameRate());
		rate = Math.floor(getFrameRate());

	}
	
	

	fill(255);
	text(word,800,0);
	
	
	
	pos = easycam.getPosition();
	
	camX = pos[0];
  	camY = pos[1];
	camZ = pos[2];
	
	
	
	v = easycam.getViewport();
	
	vx = v[0];
	vy = v[1];
	vw = v[2];
	vh = v[3];
	
	
	
	
	
	
}

function keyTyped(){
	console.log(mouseX + " " + mouseY);
	if(key === ' ')
		u.mouseClicked(mouseX, mouseY);
}

function manyPlanets(){
	console.log("test")
	for(rep = 0; rep < 100; rep++){
		let rand = Math.random()*2000;
		u.planets.push(
			new Planet(rand,0,rand, rand/10 ,0, "Mercury", "assets/tri.jpg", rand, 4.15, false, null, .1)
		);
	}
}




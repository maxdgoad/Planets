
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
    slider.position(10, 10);
    slider.style('width', '100px');
	
	frameRate(60);
    
    u = new Universe();
    u.addPlanet(30, "Ceres", "ceres.jpg");
	
	textFont(bauh);
  	textSize(100);
	
	
	
	
	f = frameRate;
}

        /**
         * draws things into the program
		 * @pre none
		 *		@param none
		 *		@post draws things into the program
		 * 		@return none
		 */  
function draw() {
	
	
	
	
	//background(0);
	//keyDown();
	//camera(camX , camY, camZ, 0, 0, 0, 0, 1, 0); // first three are camera's xyz, next three are where camera is looking, last three are orthogonal direction ( ie, orientation)
    
    //orbitControl(3,3,3);
    
    u.draw();
    
    u.drawPlanet();
	
	if(frameCount%50 == 0){

		word = Math.floor(getFrameRate());
		rate = Math.floor(getFrameRate());

	}

	fill(255);
	text(word,250,250);
	
	
	
	pos = easycam.getPosition();
	
	camX = pos[0];
  	camY = pos[1];
	camZ = pos[2];
	
	
	
	v = easycam.getViewport();
	
	vx = v[0];
	vy = v[1];
	vw = v[2];
	vh = v[3];
	
	console.log(easycam.getRotation());
	
	
	
	
}




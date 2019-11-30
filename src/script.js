
let bauh;


let word = 0;

let rate = 0;

var easycam;

let eyeZ;

let x= 0, y= 0, z= 0;

let pos;

let vx=0,vy=0, vw=0, vh=0;

let v;

let button, planetDistance, planetRadius, planetName, planetTexture;

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
    //u.addPlanet(30, "Ceres", "ceres.jpg");
    addNewPlanet();
    
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
	
	//console.log(easycam.getRotation());
	
}

function addNewPlanet(){
    button = createButton('Add Planet');
    button.mousePressed(callAddPlanet);
    button.position(1400,10);
    button.size(100,40);
    button.style("font-family","Arial");
    button.style("background-color","#000");
    button.style("color","#fff");
    
    planetRadius = createInput('');
    planetRadius.position(1400, 100);
    planetRadius.size(50);
    myRadius = createDiv("Enter the radius here");
    myRadius.position(1375, 75); 
    myRadius.style("color","#fff");
    
    planetName = createInput();
    planetName.position(1400, 150);
    planetName.size(50);
    myPlanetName = createDiv("Enter the name here");
    myPlanetName.position(1375, 125); 
    myPlanetName.style("color","#fff");
    
    planetTexture = createInput();
    planetTexture.position(1400, 200);
    planetTexture.size(50);
    myPlanetTexture = createDiv("Enter the texture here");
    myPlanetTexture.position(1375, 175); 
    myPlanetTexture.style("color","#fff");
    
    planetDistance = createInput();
    planetDistance.position(1400, 250);
    planetDistance.size(50);
    myPlanetDistance = createDiv("Enter distance here");
    myPlanetDistance.position(1375, 225); 
    myPlanetDistance.style("color","#fff");
}

function callAddPlanet(){
    u.addPlanet(planetDistance.value(), planetRadius.value(), planetName.value(), planetTexture.value() + ".jpg");
}



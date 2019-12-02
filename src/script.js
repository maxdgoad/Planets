
let bauh;


let word = 0;

let rate = 0; 

var easycam;

let eyeZ;

let x= 0, y= 0, z= 0;

let pos;

let vx=0,vy=0, vw=0, vh=0;

let v;


var osc;

let st = false;

let mobile = false;

let lightsOnBool = false;


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
	easycam.setDistanceMin(240);
	easycam.setDistanceMax(2800); 
	
	eyeZ = height / 2 / tan((30 * PI) / 180);
	
	


  // suppress right-click context menu
  //document.oncontextmenu = function() { return false; }
	
    
    slider = createSlider(.001, 50, .001, .001); 
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
	

		osc = new p5.Oscillator();
		osc.setType('sine');
		osc.freq(240);
		osc.amp(0);
		osc.start();

		osc.amp(0.5, 0.05);

	 
	f = frameRate;
	
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    	mobile = true;
	
	}
	
	else{
		
		button448 = createButton("448 planets (warning)");
	
		button448.mousePressed(manyPlanets);
		button448.position(10,10);
		
		buttonPause = createButton("start");
		
		buttonPause.mousePressed(start);
		buttonPause.position(10,30);
		
		buttonLights = createButton("Turn on the lights");
		
		buttonLights.mousePressed(lightsOn);
		buttonLights.position(10,50);
		
		buttonInfo = createButton("Info");
		
		buttonInfo.attribute('href', 'www.448planets.com/about.html');
		//buttonInfo.style('color', 'white');
		buttonInfo.position(windowWidth*.95,windowHeight*.92);
		buttonInfo.style('width', "50px");
		buttonInfo.style('height', "50px");
		
		var str = ("Info").link('about.html');
		
		buttonInfo.html(str);
		
	
	
	
	
		colorMode(HSB);
	
	
		
	}
	
	//setAttributes('perPixelLighting', true);
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
	

	
	if(!(mobile || lightsOnBool)){
		lightFalloff(0,.00003, 0);
    

		for(x = -1; x<=1; x++){

			for(z = -1; z<=1; z++){
				pointLight(0, 0,1, x*300,0, z*300 );

			}
		}
	}
	
	
	
	
	
	

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
	for(rep = 0; rep < 10; rep++){
		let rand = Math.random()*2000;
		u.planets.push(
			new Planet(rand,0,rand, rand/10 ,0, "Mercury", "assets/tri.jpg", rand, 4.15, false, null, .1, 1 ,1 )
		);
	}
}

function start(){
	
	
		
}

function lightsOn(){
	if(!lightsOnBool){
		buttonLights.html('Turn off the lights');
	}
	else
		buttonLights.html('Turn on the lights');

	lightsOnBool = !lightsOnBool;

}

function deviceShaken() {
  u.mouseClicked(0,0);
  slider.value(50);
  
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



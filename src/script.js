
let bauh;


let word = 0;

let rate = 0; 

var easycam;

let eyeZ;

let x= 0, y= 0, z= 0;

let pos;

let vx=0,vy=0, vw=0, vh=0;

let v;

// variables for add functionality
let addButton, planetDistance, planetRadius, planetTimescale, planetTexture, sel, moonSel, isMoon, parentSel;

//variables for modify functionality
let modButton, modDistance, modRadius, modTimescale, modTexture; 

var osc;

let st = false;

let mobile = false;

let lightsOnBool = false;

let musicPlayingBool = false;

var soundType = ['sine', 'triangle', 'square', 'sawtooth'];


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
	easycam.setDistanceMax(2700); 
	
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
		osc.amp(0.2);
		osc.start();

    myOptionSel = createDiv("Pick an option");
    myOptionSel.position(windowWidth*.80,windowHeight*.03);
    myOptionSel.style("color","#fff");   
    optionSel = createSelect();
    optionSel.position(windowWidth*.80,windowHeight*.06);
    optionSel.size(125);
    optionSel.option('');
    optionSel.option("Add planet");
    optionSel.option("Modify planet");
    optionSel.changed(mySelectOption);
	 
	f = frameRate;
	
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    	mobile = true;
	
	}
	
	else{
		
		button448 = createButton("448 planets (warning)");
	
		button448.mousePressed(manyPlanets);
		button448.position(10,10);
		
		buttonPause = createButton("Turn on Music!");
		
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
	
	if (!musicPlayingBool) {
			buttonPause.html('Turn off Music!');
			// accommodate the autoplay policy
			getAudioContext().resume();
	} else {
			getAudioContext().suspend();
			buttonPause.html('Turn on Music!');
	}
	
	musicPlayingBool = !musicPlayingBool;	
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
    addButton = createButton('Add Planet');
    addButton.mousePressed(callAddPlanet);
    addButton.position(windowWidth*.90,windowHeight*.03);
    addButton.size(100,40);
    addButton.style("font-family","Arial");
    addButton.style("background-color","#000");
    addButton.style("color","#fff");
    
    planetRadius = createInput('');
    planetRadius.position(windowWidth*.90,windowHeight*.13);
    planetRadius.size(50);
    myPlanetRadius = createDiv("Enter radius here");
    myPlanetRadius.position(windowWidth*.90,windowHeight*.1);
    myPlanetRadius.style("color","#fff");
    
    myPlanetTexture = createDiv("Choose texture here");
    myPlanetTexture.position(windowWidth*.90,windowHeight*.16);
    myPlanetTexture.style("color","#fff");
    
    planetDistance = createInput();
    planetDistance.position(windowWidth*.90,windowHeight*.25);
    planetDistance.size(50);
    myPlanetDistance = createDiv("Enter distance here");
    myPlanetDistance.position(windowWidth*.90,windowHeight*.22);
    myPlanetDistance.style("color","#fff");
    
    planetTimescale = createInput();
    planetTimescale.position(windowWidth*.90,windowHeight*.31);
    planetTimescale.size(50);
    myPlanetTimescale = createDiv("Enter timescale here");
    myPlanetTimescale.position(windowWidth*.90,windowHeight*.28); 
    myPlanetTimescale.style("color","#fff");
    
    myPlanetMoon = createDiv("Is planet a satellite?");
    myPlanetMoon.position(windowWidth*.90,windowHeight*.34);
    myPlanetMoon.style("color","#fff");
}

function modifyCurPlanet(){
    modButton = createButton('Modify Planet');
    modButton.mousePressed(callModPlanet);
    modButton.position(windowWidth*.90,windowHeight*.03);
    modButton.size(100,40);
    modButton.style("font-family","Arial");
    modButton.style("background-color","#000");
    modButton.style("color","#fff");
    
    modRadius = createInput('');
    modRadius.position(windowWidth*.90,windowHeight*.13);
    modRadius.size(50);
    myModRadius = createDiv("Modify radius here");
    myModRadius.position(windowWidth*.90,windowHeight*.1);
    myModRadius.style("color","#fff");
    
    myModTexture = createDiv("Modify texture here");
    myModTexture.position(windowWidth*.90,windowHeight*.16);
    myModTexture.style("color","#fff");
    
    modDistance = createInput();
    modDistance.position(windowWidth*.90,windowHeight*.25);
    modDistance.size(50);
    myModDistance = createDiv("Modify distance here");
    myModDistance.position(windowWidth*.90,windowHeight*.22);
    myModDistance.style("color","#fff");
    
    modTimescale = createInput();
    modTimescale.position(windowWidth*.90,windowHeight*.31);
    modTimescale.size(50);
    myModTimescale = createDiv("Modify timescale here");
    myModTimescale.position(windowWidth*.90,windowHeight*.28); 
    myModTimescale.style("color","#fff");
}

function callAddPlanet(){
    if(planetDistance.value() >= 10 && planetDistance.value() <= 1000 && planetRadius.value() >= 5 && planetRadius.value() <= 200 & planetTimescale.value() >= 0.001 && planetTimescale.value() <= 5){
        if(isMoon.value() == 'yes'){
            u.addPlanet(planetDistance.value(), planetRadius.value(), planetTexture.value().toLowerCase() + ".jpg", planetTimescale.value(), true, planetParent.value().toLowerCase());
        }
        else{
            u.addPlanet(planetDistance.value(), planetRadius.value(), planetTexture.value().toLowerCase() + ".jpg", planetTimescale.value(), false, null);
        }
    }
    else{
        alert("Incorrect input!");
    }
}

function callModPlanet(){
    if(modDistance.value() >= 10 && modDistance.value() <= 1000 && modRadius.value() >= 5 && modRadius.value() <= 200 & modTimescale.value() >= 0.001 && modTimescale.value() <= 5){
        u.modPlanet(modDistance.value(), modRadius.value(), planetTexture.value().toLowerCase(), modTimescale.value());
    }
    else{
        alert("Incorrect input!");
    }
}

function mySelectEvent(){
    let item = moonSel.value();
    if(item == 'yes'){
        parentSel = createSelect();
        parentSel.position(1400, 350);
        parentSel.size(75);
        var planets = u.getPlanetsName();
        for(var rep=0; rep<u.getPlanets().length; rep++){
            parentSel.option(planets[rep]);
        }
        planetParent = parentSel;
        myPlanetParent = createDiv("Enter parent here");
        myPlanetParent.position(1375, 325); 
        myPlanetParent.style("color","#fff");
    }
    else{
        planetParent.hide();
        myPlanetParent.hide();
    }
}

function selectTexture(){
    sel = createSelect();
    sel.position(windowWidth*.90,windowHeight*.19);
    sel.size(75);
    var planets = u.getPlanetsName();
    for(var rep=0; rep<u.getPlanets().length; rep++){
        sel.option(planets[rep]);
    }
    planetTexture = sel;
}

function mySelectOption(){
    let option = optionSel.value();
    if(option == "Add planet"){
        addNewPlanet();
        selectTexture();
        
        moonSel = createSelect();
        moonSel.position(windowWidth*.90,windowHeight*.37);
        moonSel.size(50);
        moonSel.option('');
        moonSel.option('yes');
        moonSel.option('no');
        moonSel.changed(mySelectEvent);
        isMoon = moonSel;
        
        modButton.hide();
        modRadius.hide();
        myModRadius.hide();
        myModTexture.hide();
        modDistance.hide();
        myModDistance.hide();
        modTimescale.hide();
        myModTimescale.hide();
    }
    else if(option == "Modify planet"){
        modifyCurPlanet();
        selectTexture();
        
        addButton.hide();
        planetRadius.hide();
        myPlanetRadius.hide();
        myPlanetTexture.hide();
        planetDistance.hide();
        myPlanetDistance.hide();
        planetTimescale.hide();
        myPlanetTimescale.hide();
        myPlanetMoon.hide();
        moonSel.hide();
    }
    else{
        sel.hide();
        
        modButton.hide();
        modRadius.hide();
        myModRadius.hide();
        myModTexture.hide();
        modDistance.hide();
        myModDistance.hide();
        modTimescale.hide();
        myModTimescale.hide();
        
        addButton.hide();
        planetRadius.hide();
        myPlanetRadius.hide();
        myPlanetTexture.hide();
        planetDistance.hide();
        myPlanetDistance.hide();
        planetTimescale.hide();
        myPlanetTimescale.hide();
        myPlanetMoon.hide();
        moonSel.hide();
    }
}



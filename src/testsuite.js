//testsuite.js

class test{
	
	constructor(name, func){
		this.count = 0;
		this.pass = true;
		this.done = false;
		
		this.name = name;
		
		this.func = func;
		
		this.timescale = 10;
		this.x = -200;
		
		if(this.name == "trail test")
			this.maxCount = 600;
		else
			this.maxCount = 140;
	}
	
	draw(){
		try{
			this.func(this.count, this.timescale, this.x);
			this.count++;
			this.x++;
			if(this.count >= this.maxCount){
				console.log(this.name + " passes");
				this.pass = true;
				this.done = true;
			}
		} catch(e){
			console.log(this.name + " fails");
			console.log(e);
			this.pass = false;
			this.done = true;
		}
	}
}

let tex;
function preload(){
	
	tex = loadImage("assets/mars.jpg");
}

let currentTest = 0;
let passes = 0;

let number;

let earth;
let sun;
let moon;
let slider = {
	'value': 10,
	'value': function(){
	return 10;
	}
};

let lightsOnBool = true;


function setup(){
	
	cnv = createCanvas(800, 800, WEBGL);
	
	sun = new Planet(0, 0, 0, 100, 0, 'Sun', "assets/mars.jpg", 1, 1, false, null, 0, 0);
		
	earth = new Planet(0, 0, 0, 50, 0, 'Earth', "assets/mars.jpg", 500, 1, false, null, 0, 0);
	
	moon = new Planet(0,0,0,20,0, "Moon", "assets/moon.jpg", 200, 1.62, true, earth, .4108, 0);
	
	tests = [];
	
	
	tests.push(new test(("sphere test"), function() {
		sphere(80);
	}));
	
	
	tests.push(new test(("moving sphere test"), function(count, timescale, x){
		background(255);
		translate(x, 0, 0);	
		sphere(80);
	}));
	
	tests.push(new test(("timescale test"), function(count, timescale, x){
		background(255);
		x += timescale*count
		translate(x, 0, 0);
		sphere(80);
	}));
	
	tests.push(new test(("texture test"), function(count, timescale, x){
		background(255);
		texture(tex);
		sphere(80);
	}));
	
	tests.push(new test(("rotate test"), function(count, timescale, x){
		background(255);
		rotateZ(count)
		sphere(80);
	}));
	
	tests.push(new test(("revolve test"), function(count, timescale, x){
		background(255);
		sphere(100);
		translate(sin(count/20)*200, 0, cos(count/20)*200)
		sphere(20);
	}));
	
	
	
	
	tests.push(new test(("multi-revolve test"), function(count, timescale, x){
	
		background(255);
		
		sphere(100);
		translate(Math.sin(count/20)*200, 0, Math.cos(count/20)*200);
		sphere(30);
		//x += timescale*count;
		
		translate(-1*Math.sin(count/20)*50 , 0, Math.cos(count/20)*50);
		sphere(10);
		
		
		
		//sun.draw();
		//earth.draw();
		//moon.draw();
		
	}));
	
	tests.push(new test(("sun delete test"), function(count, timescale, x){
		background(255);
		sphere(100);
		if(200-count > 100+20){
			translate(200-count, 0, 0);
			sphere(20);
		}
	}));
	
	
	
	tests.push(new test(("light test"), function(count, timescale, x){
		background(255);
		push();
		translate(0,0,-400);
		emissiveMaterial(0);
		box(500);
		pop();
		directionalLight(0,0,110, sin(count/40), 0, cos(count/40));
		sphere(100);
		
		
		
	}));
	
	
	
	tests.push(new test(("zoom-in test"), function(count, timescale, x){
		easycam = createEasyCam();
		easycam.setDistance(500-count, 0);
		background(255);
		push();
		translate(0, 0, -400);
		emissiveMaterial(0);
		box(500);
		pop();
		directionalLight(0,0,110, sin(count/40), 0, cos(count/40));
		sphere(100);
		
		
		
	}));
	
	tests.push(new test(("zoom-out test"), function(count, timescale, x){
		easycam = createEasyCam();
		easycam.setDistance(360+count, 0);
		background(255);
		push();
		translate(0, 0, -400);
		emissiveMaterial(0);
		box(500);
		pop();
		directionalLight(0,0,110, sin(-count/40), 0, cos(count/40));
		sphere(100);
		
		
		
	}));
	
	
	tests.push(new test(("trail test"), function(count, timescale, x){
		background(0);
		easycam = createEasyCam();
		easycam.setDistance(1500, 0);
		
			easycam.rotateX(1);
		
		
		sun.draw();
		
		earth.draw();
		moon.draw();
		
		number.style('color', 'white');
		
		
	}));
	



	colorMode(HSB);

	number = createDiv('Test '+ (currentTest+1));
	number.position(10,10);
	number.style('color', 'black');
	number.style('font-size', '35px');
	number.html('Test '+ (currentTest+1) + ": " + tests[currentTest].name);
	
	
	buttonInfo = createButton("Info");
		
	buttonInfo.attribute('href', 'www.448planets.com/about.html');
	//buttonInfo.style('color', 'white');
	buttonInfo.position(windowWidth*.95,windowHeight*.92);

	var str = ("Info").link('about.html');
	
	buttonInfo.style('width', "50px");
	buttonInfo.style('height', "50px");

	buttonInfo.html(str);


}


function draw(){
	
	
	
	if(currentTest < tests.length && tests[currentTest].done ){
		
		if(currentTest < tests.length-1){
			number.html('Test '+ (currentTest+2) + ": " + tests[currentTest+1].name);
			console.log(tests[currentTest].pass)
			
		}
		if(tests[currentTest].pass){
			passes++;
			var a;
			a = createDiv('Test '+ (currentTest+1));
			a.position(800,55*(currentTest+1));
			a.style('color', 'black');
			a.style('font-size', '25px');
			a.html('Test '+ (currentTest+1) + ": " + tests[currentTest].name  + "<div style='color: green'>pass</div>");
			
			
		}
				
		currentTest++;
	}
	
	else if(currentTest == tests.length){
		console.log("Test suite complete: " + passes + " passes out of " + tests.length + " tests");
		number.html("Test suite complete: " + passes + " passes out of " + tests.length + " tests");
		noLoop();
		
	}
	
	else
		tests[currentTest].draw();
	
	
	
}
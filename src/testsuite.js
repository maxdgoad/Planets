//testsuite.js

class test{
	
	constructor(name, func){
		this.count = 0;
		this.pass = false
		this.done = false;
		
		this.name = name;
		
		this.func = func;
	}
	
	draw(){
		try{
			this.func(this.count);
			this.count++;
			if(this.count == 160){
				console.log(this.name + " passes");
				this.pass = true;
				this.done = true;
			}
		} catch(e){
			console.log(this.name + " fails");
			this.pass = false;
			this.done = true;
		}
	}
}


function preload(){
	
	
}

let currentTest = 0;
let passes = 0;

function setup(){
	
	cnv = createCanvas(800, 800, WEBGL);
	
	tests = [];
	
	tests.push(new test(("sphere test"), function() {
		sphere(80);
	}));
	
	
	tests.push(new test(("moving sphere test"), function(count){
		background(255);
		translate(count, 0, 0);
		sphere(80);
	}));
	
	tests.push(new test(("moving sphere test"), function(count){
		background(255);
		translate(count, 0, 0);
		sphere(80);
	}));
	



}


function draw(){
	
	if(currentTest < tests.length && tests[currentTest].done ){
		currentTest++;
		passes++;
	}
	
	else if(currentTest == tests.length){
		console.log("Test suite complete: " + passes + " passes out of " + tests.length + " tests");
		noLoop();
		
	}
	
	else
		tests[currentTest].draw();
	
	
	
}
class Planet {
    
    constructor(x, y, z, radius, mass, name, texture){
		
        this.x = x; // the xyz position, will add velocity later (vectors hehe)
        this.y = y;
		this.z = z;
        this.radius = radius;
		this.mass = mass;
        this.name = name;

        this.texture = loadImage(texture);
        
        this.trailPoints = 15; // how many points in the trail
        
        this.trailLength = 150; //the length (in frames) of the trail
        this.trail = [];
        for(var rep = 0; rep < this.trailPoints; rep++){
            this.trail[rep] = [0,0,0];
        }
        

    }
    
    
    draw() {
        //draw planet in the scene 
		//where it is supposed to go, velocity, etc
        
        this.x+=4;
        
        push();
            texture(this.texture);
            translate(this.x, this.y, this.z);
            sphere(this.radius, 40, 40);
        pop();
        
        
        this.trail[Math.floor((frameCount%this.trailLength)/(this.trailLength/this.trailPoints))] = [this.x ,this.y ,this.z];
        
        this.drawTrail();
        

    }
    
    //keep track of the trails of the object (the path behind it)
    drawTrail(){
        let iterator = Math.floor((frameCount%this.trailLength)/(this.trailLength/this.trailPoints))+1;
        
        if(frameCount < this.trailLength){
            iterator = Math.floor(this.trailPoints * ( frameCount / this.trailLength));
        }
            
        stroke(255);
	    strokeWeight(10);
        fill(255);
        noFill();
    
        beginShape();
            
            if(frameCount > this.trailLength){
                for(var rep = iterator; rep < this.trailPoints; rep++){

                    curveVertex(this.trail[rep][0], this.trail[rep][1], this.trail[rep][2]);

                }
            }

			for(var rep = 0; rep < iterator; rep++){

				curveVertex(this.trail[rep][0], this.trail[rep][1], this.trail[rep][2]);
                
			}
        
         curveVertex(this.x, this.y, this.z);
		endShape();
        
        stroke(255);
	    strokeWeight(10);
        fill(255);
        noFill();
       
       
    }
    
    getCoordinates(){
        return [this.x, this.y, this.z];
    }
    
    getRadius(){
        return this.radius;
    }
    
    getMass(){
        return this.mass;
    }
    
    getName(){
        return this.name
    }

	
    log(){
        console.log("Object name: " + this.name + 
                    "\nObject XYZ: " + Math.floor(this.x) + ", " + Math.floor(this.y) + ", " + Math.floor(this.z) + 
                    "\nObject radius: " + Math.floor(this.radius) +
                    "\nObject mass: " + Math.floor(this.mass));
    }
}
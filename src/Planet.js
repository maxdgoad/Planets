

class Planet {
        /**
         * constructor
		 * @pre none
		 *		@param x, y, z, radius, mass, name,and texture
		 *		@post constructor
		 * 		@return none
		 */
    constructor(x, y, z, distance, radius, mass, name, texture){
		
        this.x = x; // the xyz position, will add velocity later (vectors hehe)
        this.y = y;
		this.z = z;
        this.radius = radius;
		this.mass = mass;
        this.name = name;

        this.texture = loadImage(texture);
        
        this.trailPoints = 30; // how many points in the trail
        
        this.trailLength = 150; //the length (in frames) of the trail
        this.trail = [];
        for(var rep = 0; rep < this.trailPoints; rep++){
            this.trail[rep] = [0,0,0];
        }
		
		this.state1 = {
			distance : 2000,
			center   : [this.x ,this.y ,this. z],
			rotation : [1,1,0,0],
		  }; 
		
	    this.timescale = 10;
        this.orbitX = 0;
        this.orbitY = 0;
        this.orbitZ = 0;
        this.angle = 0;
        this.distance = distance;

    } 
	
	
        /**
         * draw planet in the scene 
		 * where it is supposed to go, velocity, etc
		 * @pre none
		 *		@param none
		 *		@post draws things on the program
		 * 		@return none
		 */
    
    draw() {
		this.timescale = slider.value();
        this.orbitX  += .001 * this.timescale;
	    this.orbitZ  += .001 * this.timescale;
        
        this.x = Math.sin(this.orbitX)*this.distance;
        this.y = 0;
        this.z = Math.cos(this.orbitZ)*this.distance;
        push();
            texture(this.texture);
            translate(this.x, this.y, this.z);   
            rotate(this.angle);
            sphere(this.radius, 25, 25);
            this.angle += 1;
        pop();
        this.trail[Math.floor((frameCount%this.trailLength)/(this.trailLength/this.trailPoints))] = [this.x,this.y,this.z];	
        
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
		
		line(camX,camY,camZ, this.x,this.y,this.z);
        
        stroke(255);
		
	    strokeWeight(0.01);
        fill(255);
        noFill();
    }
    
    
        /**
         * keep track of the trails of the object (the path behind it)
		 * @pre none
		 *		@param none
		 *		@post draws the trail
		 * 		@return none
		 */
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
		
		line(camX,camY,camZ, this.x,this.y,this.z);
        
        stroke(255);
		
	    strokeWeight(0.01);
        fill(255);
        noFill();
       
       
    }
    
        /**
         * gets coordinates
		 * @pre none
		 *		@param none
		 *		@post gets coordinates
		 * 		@return coordinates
		 */
    getCoordinates(){
        return [this.x, this.y, this.z];
    }
        /**
         * gets radius
		 * @pre none
		 *		@param none
		 *		@post gets radius
		 * 		@return radius
		 */
    getRadius(){
        return this.radius;
    }
    
        /**
         * gets mass
		 * @pre none
		 *		@param none
		 *		@post gets mass
		 * 		@return mass
		 */
    getMass(){
        return this.mass;
    }
    
    getDistance(){
        return this.distance;
    }
    
        /**
         * gets name
		 * @pre none
		 *		@param none
		 *		@post gets name
		 * 		@return name
		 */
    getName(){
        return this.name
    }
        /**
         * prints info about the planet
		 * @pre none
		 *		@param none
		 *		@post prints info about the planet
		 * 		@return none
		 */
    log(){
        console.log("Object name: " + this.name + 
                    "\nObject XYZ: " + Math.floor(this.x) + ", " + Math.floor(this.y) + ", " + Math.floor(this.z) + 
                    "\nObject radius: " + Math.floor(this.radius) +
                    "\nObject mass: " + Math.floor(this.mass));
    }
}
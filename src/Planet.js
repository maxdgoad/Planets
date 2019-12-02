

class Planet { 
       /**
         * constructor
	 * @name constructor
	 * @param x, y, z, radius, mass, name, texture, distance, timescale, moon, parent, rotationSpeed, zaxis
 	 * @return none  
	 */
    constructor(x, y, z, radius, mass, name, texture, distance, timescale, moon, parent, rotationSpeed, zaxis){

		
        this.x = x; // the xyz position, will add velocity later (vectors hehe)
        this.y = y;
		this.z = z;
		
		this.zaxis = zaxis;
		
		this.rotationSpeed = 0;
		
		if(rotationSpeed)
			this.rotationSpeed = rotationSpeed;
		
		this.orbitX = x;
		this.orbitZ = z;
        this.radius = radius;
		this.mass = mass;
        this.name = name;
		
		this.moon = moon;
		
		if(this.moon){ 
			this.parent = parent;
			console.log(this.parent);
		}
		
		this.distance = distance;
		this.timescale = timescale;
		
		this.angle = 0;
		
		this.weightedTimescale = slider.value()*this.timescale;

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
            this.count = 0;
            

        this.osc = new p5.Oscillator();

        if (this.radius >= 100) {
            this.osc.setType(soundType[0]);
        } else if (this.radius < 100 && this.radius >= 45) {
            this.osc.setType(soundType[1]);
        } else if (this.radius < 45 && this.radius >= 22) {
            this.osc.setType(soundType[2]);
        } else {
            this.osc.setType(soundType[3]);
        }

        if (Math.abs(this.rotationSpeed) > 50) {
            this.freq = rotationSpeed * 4;
            this.osc.freq(this.freq);
        } else if (Math.abs(this.rotationSpeed) <= 50 && Math.abs(this.rotationSpeed) > 1) {
            this.freq = this.rotationSpeed + 149
            this.osc.freq(this.freq);
        } else {
            this.freq = this.rotationSpeed * 200 + 40;
            this.osc.freq(this.freq);
        }
        
        this.osc.amp(0.15);
		
		this.osc.stop();
    } 
	
	
	/**
	* Draws the planet to the screen
	* @name draw
	* @param none
	* @return none  
	*/

    draw() {

      
        
		this.weightedTimescale = slider.value()*this.timescale;

        
        
        this.orbitX  += .001 * this.weightedTimescale;
	    this.orbitZ  += .001 * this.weightedTimescale;
		
		if(this.moon ){
			
			this.orbitX  += .001 * this.weightedTimescale*6.17;
	    	this.orbitZ  += .001 * this.weightedTimescale*6.17;
			
			
			this.x = -1*Math.sin(-1*this.orbitX)*this.distance + this.parent.x;
        	this.y = 0;
        	this.z = Math.cos(this.orbitZ)*this.distance + this.parent.z;
			
		}
		
		else{
			this.x = Math.sin(this.orbitX)*this.distance;
        	this.y = 0;
        	this.z = Math.cos(this.orbitZ)*this.distance;
		}
		
		if(this.name == "Saturn"){
			push();
            texture(this.texture);
            translate(this.x, this.y, this.z);
            rotateX(90);
			rotate(this.angle);
        	torus(this.radius + 70, 8, 25);
            
        pop();
			
		}
				
		
		push();
			if(this.name == "Sun" && !(lightsOnBool || mobile))
				emissiveMaterial(0, 0, 50, 1);
			
            texture(this.texture);
            translate(this.x, this.y, this.z);
            rotateY(this.angle);
			rotateZ(this.zaxis);
			
			//specularMaterial();
			
        	sphere(this.radius, 25);
            this.angle += this.rotationSpeed*this.weightedTimescale;
        pop();
		
		
		this.trail[Math.floor((frameCount%this.trailLength)/(this.trailLength/this.trailPoints))] = [this.x ,this.y ,this.z];
        this.drawTrail();
		

		
	    strokeWeight(0.01);
        fill(255);
        noFill();
    }
    
    
       /**
         * Draws the trail behind the planet
	 * @name drawTrail
	 * @param none
 	 * @return none  
	 */
    drawTrail(){
		this.state1.center = [this.x, this.y, this.z];
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
		
		//line(camX,camY,camZ, this.x,this.y,this.z); 
        
        stroke(255);
		
	    strokeWeight(0.01);
        fill(255);
        noFill();
       
       
    }
    
      /**
         * Returns the coordinates of the planet
	 * @name getCoordinates
	 * @param none
 	 * @return x,y,z  
	 */
    getCoordinates(){
        return [this.x, this.y, this.z];
    }

	/**
         * Returns the planets distance from the sun
	 * @name distanceFromSun
	 * @param none
 	 * @return distanceFromSun  
	 */
	distanceFromSun(){
		return Math.sqrt(this.x*this.x +
						this.y*this.y + 
						this.z*this.z);
	}
   	 /**
         * returns the x position
	 * @name getX
	 * @param none
 	 * @return x  
	 */
    getX(){
        return this.x;
    }
    	/**
         * returns the y position
	 * @name getY
	 * @param none
 	 * @return y  
	 */
    getY(){
        return this.y;
    }
    
	/**
         * returns the z position
	 * @name getZ
	 * @param none
 	 * @return z  
	 */
    getZ(){
        return this.z;
    }
   	 /**
         * Set the x position
	 * @name setX
	 * @param x
 	 * @return none  
	 */
    setX(x){
        this.x = x;
    }
    	/**
         * Set the y position
	 * @name setY
	 * @param y
 	 * @return none  
	 */
    setY(y){
        this.y = y;
    }
    	/**
         * Set the z position
	 * @name setZ
	 * @param none
 	 * @return none  
	 */
    setZ(z){
        this.z = z;
    }

       	/**
         * Returns the radius
	 * @name getRadius
	 * @param none
 	 * @return radius  
	 */
    getRadius(){
        return this.radius;
    }
    
        /**
         * Returns the mass
	 * @name getMass
	 * @param none
 	 * @return mass  
	 */
    getMass(){
        return this.mass;
    }
    
	/**
         * Returns the distance
	 * @name getDistance
	 * @param none
 	 * @return distance  
	 */
    getDistance(){
        return this.distance;
    }
    
        /**
         * Returns planet name
	 * @name getName
	 * @param none
 	 * @return name  
	 */
    getName(){
        return this.name
    }
	/**
         * Returns timescale
	 * @name getTimescale
	 * @param none
 	 * @return timescale  
	 */
    getTimescale(){
        return this.timescale;
    }
	/**
         * Returns the planets texture
	 * @name getTexture
	 * @param none
 	 * @return texture  
	 */
    getTexture(){
        return this.texture;
    }
	/**
         * Returns distance from the sun
	 * @name getDistance
	 * @param none
 	 * @return distance  
	 */
    getDistance(){
        return this.distance;
    }
    	/**
         * Returns the trail points
	 * @name getTrailPoints
	 * @param none
 	 * @return trailPoints  
	 */
    getTrailPoints(){
        return this.trailPoints;
    }
    	/**
         * Returns the trail length
	 * @name getTrailLength
	 * @param none
 	 * @return trailLength  
	 */
    getTrailLength(){
        return this.trailLength;
    }
    	/**
         * Returns the trail
	 * @name getTrail
	 * @param none
 	 * @return trail  
	 */
    getTrail(){
        return this.trail;
    }
   	 /**
         * Sets the trail
	 * @name setTrail
	 * @param x,y,z
 	 * @return none  
	 */
    setTrail(x,y,z){
       this.x = x;
       this.y = y;
       this.z = z; this.trail[Math.floor((frameCount%this.trailLength)/(this.trailLength/this.trailPoints))] = [this.x,this.y,this.z];
    }
	/**
         * Returns osc.
	 * @name getOsc
	 * @param none
 	 * @return osc  
	 */
    getOsc(){
        return this.osc;
    }
	/**
         * Sets the osc. amp
	 * @name setOscAmp
	 * @param value
 	 * @return none  
	 */
    setOscAmp(value){
        this.osc.amp(value);
    }
	/**
         * Sets the osc. frequency
	 * @name setOscFreq
	 * @param value
 	 * @return none  
	 */
    setOscFreq(value){
        this.osc.freq(value);
    }
	/**
         * returns the osc. frequency
	 * @name getOscFreq
	 * @param none
 	 * @return freq  
	 */
    getOscFreq(){
        return this.freq;
    }
    	/**
         * Changes the planets texture
	 * @name createTexture
	 * @param t
 	 * @return none  
	 */
    createTexture(t){
        t = this.texture;
        texture(t);
    }
    	/**
         * Changes the parent of the planet
	 * @name setParent
	 * @param parent
 	 * @return none  
	 */
    setParent(parent){
        this.parent = parent;
    }
    	/**
         * Sets the distance from parent
	 * @name setDistance
	 * @param distance
 	 * @return none  
	 */
    setDistance(distance){
        this.distance = distance;
    }
    	/**
         * Sets the planets radius
	 * @name setRadius
	 * @param radius
 	 * @return none  
	 */
    setRadius(radius){
        this.radius = radius;
    }
    	/**
         * Sets the texture of the planet
	 * @name setTexture
	 * @param texture
 	 * @return none  
	 */
    setTexture(texture){
        this.texture = texture;
    }
    	/**
         * Sets the timescale 
	 * @name setTimescale
	 * @param timescale
 	 * @return none  
	 */
    setTimescale(timescale){
        this.timescale = timescale;
    }
	

        /**
         * logs information about the planet
	 * @name log
	 * @param none
 	 * @return none  
	 */
    log(){
        console.log("Object name: " + this.name + 
                    "\nObject XYZ: " + Math.floor(this.x) + ", " + Math.floor(this.y) + ", " + Math.floor(this.z) + 
                    "\nObject radius: " + Math.floor(this.radius) +
                    "\nObject mass: " + Math.floor(this.mass));
    }
}

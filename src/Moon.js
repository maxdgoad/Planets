class Moon extends Planet {
        /**
		 * @pre none
		 *		@param time
		 *		@post constructor
		 * 		@return none
		 */
    constructor(timescale) {
        super(0, 0, 0, 43, 0, "Moon", "assets/moon.jpg");
        this.orbitX = 0;
        this.orbitY = 0;
        this.orbitZ = 0;
        
        this.timescale = timescale;
       
         
    }
        /**
		 * @pre none
		 *		@param none
		 *		@post draws things to the program
		 * 		@return none
		 */
    draw(){
        
        this.timescale = slider.value();
        
        this.orbitX  += .001 * this.timescale;
	    this.orbitZ  += .001 * this.timescale;
        
        this.x = Math.sin(this.orbitX) *1000 + -1*Math.sin(12*this.orbitX)*200;
        this.y = 0;
        this.z = Math.cos(this.orbitZ)* 1000 + 1*Math.cos(12*this.orbitZ)*200;
        
        push();
            texture(this.texture);
  		    translate(this.x, this.y, this.z);
            sphere(this.radius, 30, 30);
        pop();
        
         
        this.trail[Math.floor((frameCount%this.trailLength)/(this.trailLength/this.trailPoints))] = [this.x ,this.y ,this.z];
        
        this.drawTrail();
        
    }
    
   
}
class Jupiter extends Planet {
        /**
         * constructor
		 * @pre none
		 *		@param time
		 *		@post constructor
		 * 		@return none
		 */

    constructor(timescale) {
        super(0, 0, 0, 85, 0, "Jupiter", "assets/jupiter.jpg");
        this.orbitX = 0;
        this.orbitY = 0;
        this.orbitZ = 0;
        this.timescale = timescale;
		
        this.angle = 0;
		this.weightedTimescale = slider.value()*this.timescale;

         
    } 

        /**
         * draws things to the program
		 * @pre none
		 *		@param none
		 *		@post draws things to the program
		 * 		@return none
		 */
    draw(){
		
		console.log(this.timescale);
        
        this.weightedTimescale = slider.value()*this.timescale;
        
        this.orbitX  += .001 * this.weightedTimescale;
	    this.orbitZ  += .001 * this.weightedTimescale;
        
        this.x = Math.sin(this.orbitX)*1800;
        this.y = 0;
        this.z = Math.cos(this.orbitZ)*1800;

        
        push();
            texture(this.texture);
            translate(this.x, this.y, this.z);
            rotate(this.angle, createVector(0,1,0));
            sphere(this.radius, 25);
            this.angle += .001;
        pop();
        
        
        this.trail[Math.floor((frameCount%this.trailLength)/(this.trailLength/this.trailPoints))] = [this.x ,this.y ,this.z];
        
        this.drawTrail();
        
        
    }
    
   
}
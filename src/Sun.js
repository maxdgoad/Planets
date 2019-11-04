
class Sun extends Planet {
        /**
         * constructor
		 * @pre none
		 *		@param time
		 *		@post constructor
		 * 		@return none
		 */
    constructor(timescale) {
        super(0, 0, 0, 240, 0, "Sun", "assets/sun.jpg");
        this.orbitX = 0;
        this.orbitY = 0;
        this.orbitZ = 0;
        this.timescale = timescale;
       
         
    }
    
        /**
         * draws things into the program
		 * @pre none
		 *		@param none
		 *		@post draws things into the program
		 * 		@return none
		 */
    draw(){
        
        this.x = 0;
        this.y = 0;
        this.z = 0;

        push();
            texture(this.texture);
  		    translate(this.x, this.y, this.z);
            sphere(this.radius, 120, 120);
        pop();
        
        
    }
    
   
}
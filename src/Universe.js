

class Universe {
        /**
         * constructor
		 * @pre none
		 *		@param none
		 *		@post constructor
		 * 		@return none
		 */
    constructor() {
        this.timescale = 10;
        //this.planets = [new Earth(10), new Moon(10), new Sun(10), new Venus(10), new Mars(10), new Mercury(10), new Jupiter(10), new Saturn(10), new Uranus(10), new Neptune(10)];
		
		//temporarily removing planets for loading reasons
		
		this.planets = [ new Earth(10), new Sun(10)];
        
         //will change later
        
        this.focused = this.planets[0];
        
        this.skyBox = loadImage('assets/clouds.jpg');
        
        this.orbitX = 0;
        this.orbitY = 0;
        this.orbitZ = 0;
        this.angle = 0;
        this.p = null;
		
		this.focused = this.planets[0];
		this.focusednum = 0;
		
		
        
    } 
    
        /**
         * prints things into the program
		 * @pre none
		 *		@param none
		 *		@post prints things into the program
		 * 		@return none
		 */
    draw() {
	  easycam.setCenter(this.focused.state1.center);
	 
		
         
       texture(this.skyBox);
       //rotate(millis() / 50000);
	   sphere(4000, 25);
        
        for(var rep = 0; rep < this.planets.length; rep++){
            this.planets[rep].draw();
        }
    }
    
    
	
	mouseClicked(xpos,ypos){
		console.log(this.planets.length);
		this.focusednum++;
		
		if(this.focusednum == this.planets.length)
			this.focusednum = 0;
		
		this.focused = this.planets[this.focusednum];
		
		
	}
    
}
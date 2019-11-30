


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
        
		
		this.earth = new Planet(0, 0, 0, 45, 0, "Earth", "assets/earth.jpg", 1000, 1, false);
		
		this.planets = [
			new Planet(0,0,0,240,0, "Sun", "assets/sun.jpg", 0, 0),
			
			new Planet(0,0,0,23,0, "Mercury", "assets/mercury.jpg", 300, 4.15, false),
			
			new Planet(0,0,0,45,0, "Venus", "assets/venus.jpg", 500, 1.62, false),
			
			this.earth,
			
			new Planet(0,0,0,45,0, "Mars", "assets/mars.jpg", 1400, .53, false),
			
			new Planet(0,0,0,45,0, "Jupiter", "assets/jupiter.jpg", 1800, .084, false),
			
			new Planet(0,0,0,45,0, "Saturn", "assets/saturn.jpg", 2100, .033, false),
			
			new Planet(0,0,0,45,0, "Uranus", "assets/uranus.jpg", 2400, .012, false),
			
			new Planet(0,0,0,45,0, "Neptune", "assets/neptune.jpg", 3000, .006, false),
			
			new Planet(0,0,0,20,0, "Moon", "assets/moon.jpg", 200, 1.62, true, this.earth)
			
			
		];
		
		
		//temporarily removing planets for loading reasons
		
		//this.planets = [ new Earth(10), new Sun(10)];
        
         //will change later
        
        
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
		
	  
		
         
       texture(this.skyBox);
       //rotate(millis() / 50000);
	   sphere(4000, 25);
        
        for(var rep = 0; rep < this.planets.length; rep++){
            this.planets[rep].draw();
        }
		
		easycam.setCenter(this.focused.state1.center, 0);
    }
    
    
	
	mouseClicked(xpos,ypos){
		console.log(this.focused);
		this.focusednum++;
		
		if(this.focusednum == this.planets.length)
			this.focusednum = 0;
		
		this.focused = this.planets[this.focusednum];
		
		
		
		
	}
    
}
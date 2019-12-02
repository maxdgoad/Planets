


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
        
		this.sun = new Planet(0,0,0,240,0, "Sun", "assets/sun.jpg", 0, 0, false, null , 0,0);
		
		this.venus = new Planet(0,0,0,45,0, "Venus", "assets/venus.jpg", 300, 1.62, false, null, .1459, 177);
	
		this.mars = new Planet(0,0,0,45,0, "Mars", "assets/mars.jpg", 300, .53, true, this.venus, 82.24, 25);
		this.earth = new Planet(0, 0, 0, 45, 0, "Earth", "assets/earth.jpg", 1000, 1, true, this.mars, 80, 23);
		
		this.moon = new Planet(0,0,0,20,0, "Moon", "assets/moon.jpg", 200, 1.62, true, this.earth, .4108, 0);
		
		
		this.venus = new Planet(0,0,0,45,0, "Venus", "assets/venus.jpg", 300, 1.62, true, this.moon, .1459, 177);
		this.mars = new Planet(0,0,0,45,0, "Mars", "assets/mars.jpg", 500, .53, true, this.venus, 82.24, 25);

		
		this.planets = [
			this.sun,
			
			new Planet(0,0,0,23,0, "Mercury", "assets/mercury.jpg", 100, 4.15, false, null, .2054, 0),
			
			this.venus,
			
			this.earth,
			
			this.mars,
			
			new Planet(0,0,0,45,0, "Jupiter", "assets/jupiter.jpg", 1800, .084, false, null, 192, 3),
			
			new Planet(0,0,0,45,0, "Saturn", "assets/saturn.jpg", 2100, .033, false, null, 182.4, 27),
			
			new Planet(0,0,0,45,0, "Uranus", "assets/uranus.jpg", 2400, .012, false, null, 113, 98),
			
			new Planet(0,0,0,45,0, "Neptune", "assets/neptune.jpg", 3000, .006, false, null, 120 , 28),
			
			this.moon, 
			
			
			
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
		
			if(this.planets[rep].distanceFromSun() <=240 && this.planets[rep].name != "Sun"){
				
				this.planets.splice(rep, 1);
				//removes planet if it hits the sun
			}
        }
		
		easycam.setCenter(this.focused.state1.center, 0);
		this.focused.setOscAmp(1 - (easycam.getDistance() / 2700));
		this.focused.setOscFreq(this.focused.getOscFreq() * (1 - (easycam.getDistance() / 2700)) * 1.5);
    }
    

    
	
	mouseClicked(xpos,ypos){
		console.log(this.focused);
		this.focusednum++;
		
		if(this.focusednum == this.planets.length)
			this.focusednum = 0;
		
		this.focused = this.planets[this.focusednum];
		

		easycam.setDistanceMin(this.planets[this.focusednum].getRadius());
		easycam.setDistanceMax((2700 - this.planets[this.focusednum].getDistance()) > 0 ? (2800 - this.planets[this.focusednum].getDistance()) : this.planets[this.focusednum].getRadius()); 

		
	}

    
}
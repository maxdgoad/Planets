


class Universe {
        /**
         * constructor
	 * @name constructor
	 * @param none
 	 * @return none  
	 */
    constructor() {
        this.timescale = 10;
        
		this.sun = new Planet(0,0,0,240,0, "Sun", "assets/sun.jpg", 0, 0, false, null , 0,0);
		
		this.earth = new Planet(0, 0, 0, 45, 0, "Earth", "assets/earth.jpg", 1000, 1, false, this.sun, 80, 23);
		
		this.moon = new Planet(0,0,0,20,0, "Moon", "assets/moon.jpg", 200, 1.62, true, this.earth, .4108, 0);

		
		this.planets = [
			this.sun,
			
			new Planet(0,0,0,23,0, "Mercury", "assets/mercury.jpg", 300, 4.15, false, null, .2054, 0),
			
			new Planet(0,0,0,45,0, "Venus", "assets/venus.jpg", 500, 1.62, false, null, -.1459, 177),
			
			this.earth,
			
			new Planet(0,0,0,45,0, "Mars", "assets/mars.jpg", 1400, .53, false, null, 82.24, 25),
			
			new Planet(0,0,0,45,0, "Jupiter", "assets/jupiter.jpg", 1800, .084, false, null, 192, 3),
			
			new Planet(0,0,0,45,0, "Saturn", "assets/saturn.jpg", 2100, .033, false, null, 182.4, 27),
			
			new Planet(0,0,0,45,0, "Uranus", "assets/uranus.jpg", 2400, .012, false, null, 113, 98),
			
			new Planet(0,0,0,45,0, "Neptune", "assets/neptune.jpg", 3000, .006, false, null, 120 , 28),
			
			this.moon, 
			
            new Planet(0,0,0,45,0, "Ceres", "assets/ceres.jpg", 5000, 0, false, null, 0, 0),
            
            new Planet(0,0,0,45,0, "Eris", "assets/eris.jpg", 6000, 0, false, null, 0, 0),
            
            new Planet(0,0,0,45,0, "Haumea", "assets/haumea.jpg", 7000, 0, false, null, 0, 0),
            
			new Planet(0,0,0,45,0, "Epic", "assets/epic.jpg", 8000, 0, false, null, 0, 0),
			
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
	 * @name draw
	 * @param none
	 * @return none  
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

	/**
         * Handles mouse clicks
	 * @name mouseClicked
	 * @param xpos, ypos
 	 * @return none  
	 */
	mouseClicked(xpos,ypos){
		console.log(this.focused);
		this.focusednum++;
		
		if(this.focusednum == this.planets.length)
			this.focusednum = 0;
		
		this.focused = this.planets[this.focusednum];
		

		easycam.setDistanceMin(this.planets[this.focusednum].getRadius());
		easycam.setDistanceMax((2700 - this.planets[this.focusednum].getDistance()) > 0 ? (2800 - this.planets[this.focusednum].getDistance()) : this.planets[this.focusednum].getRadius()); 

		
	}

	/**
         * Handles adding the planet to the universe
	 * @name addPlanet
	 * @param distance, radius, texture, timescale, moon, parent
 	 * @return none  
	 */
    addPlanet(distance, radius, texture, timescale, moon, parent){
        if(parent == "earth") parent = this.earth;
        else if(parent == "venus") parent = this.venus;
        else if(parent == "moon") parent = this.moon;
        else parent = this.sun;

        this.p = new Planet(0, 0, 0, radius, 0, texture, "assets/" + texture +".jpg", distance, timescale, moon, parent, Math.floor(Math.random() * Math.floor(100)), Math.floor(Math.random() * Math.floor(100)));

    }
    
	/**
         * Modifies an added planet
	 * @name modPlanet
	 * @param distance, radius, texture, timescale
 	 * @return none  
	 */
    modPlanet(distance, radius, texture, timescale){

        //for(var rep = 0; rep < this.planets.length; rep++){
            //if(texture == this.planets[rep].getName().toLowerCase() + ".jpg"){
            	console.log("test");
                this.planets[this.focusednum] = new Planet(0, 0, 0, radius, 0, "New planet","assets/" +texture+ ".jpg", distance, timescale, false, null, this.focused.rotationSpeed, this.focused.zaxis);
				this.focused = this.planets[this.focusednum];
				easycam.interpolateCenter(easycam.getCenter(), this.focused.state1.center, 20);
                
            //}
        //}

    }
	
	
    
	/**
         * Returns the planets
	 * @name getPlanets
	 * @param none
 	 * @return planets  
	 */
    getPlanets(){
        return this.planets;
    }

	/**
         * Returns the planets names
	 * @name getPlanetsName
	 * @param none
 	 * @return planetsName  
	 */
    getPlanetsName(){
        var planetsName = [];
        for(var rep = 0; rep < this.planets.length; rep++){
            planetsName.push(this.planets[rep].getName());
        }
        return planetsName;
    }

}

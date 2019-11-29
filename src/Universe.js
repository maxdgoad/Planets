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
		
		this.state1 = {
			distance : 2000,
			center   : [this.x,this.y,this.z],
			rotation : [1,1,0,0],
		  };
        
    } 
    
        /**
         * prints things into the program
		 * @pre none
		 *		@param none
		 *		@post prints things into the program
		 * 		@return none
		 */
    draw() {
		
	  easycam.setCenter(state1.center, 100)
         
       texture(this.skyBox);
       //rotate(millis() / 50000);
	   sphere(4000, 25);
        
        for(var rep = 0; rep < this.planets.length-1; rep++){
            this.planets[rep].draw();
        }
    }
    
    addPlanet(radius, name, texture){
        this.p = new Planet(0, 0, 0, radius, 0, name, "assets/" + texture);
    }
    drawPlanet(){
        this.timescale = slider.value();
        this.orbitX  += .001 * this.timescale;
	    this.orbitZ  += .001 * this.timescale;
        
        this.p.setX(Math.sin(this.orbitX)*400);
        this.p.setY(0);
        this.p.setZ(Math.cos(this.orbitZ)*400);
        push();
            texture(this.p.getTexture());
            translate(this.p.getX(), this.p.getY(), this.p.getZ());   
            rotate(this.angle);
            sphere(this.p.getRadius(), 25, 25);
            this.angle += 1;
        pop();
        this.p.setTrail(this.p.getX(),this.p.getY(),this.p.getZ());
        this.p.drawTrail();
        this.planets.push(this.p);
    }
    
}
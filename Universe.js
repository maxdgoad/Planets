class Universe {
    
    constructor() {
        this.planets = [new Planet(0, 0 ,0, 169, 0, "Earth", 'assets/earth.jpg'), new Moon(), new Sun()];
        
        this.timeScale = 10; //will change later
        
        this.focused = this.planets[0];
        
        this.skyBox = loadImage('assets/clouds.jpg');

        
    }
    
    draw() {
         
	   texture(this.skyBox);
	   sphere(2000, 100);
        
        for(var rep = 0; rep < this.planets.length; rep++){
            this.planets[rep].draw();
        }
    }
    
}
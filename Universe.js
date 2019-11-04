class Universe {
    
    constructor() {
        this.timescale = 10;
        this.planets = [new Earth(10), new Moon(10), new Sun(10)];
        
         //will change later
        
        this.focused = this.planets[0];
        
        this.skyBox = loadImage('assets/clouds.jpg');

        
    }
    
    draw() {
         
	   texture(this.skyBox);
	   sphere(3450, 100);
        
        for(var rep = 0; rep < this.planets.length; rep++){
            this.planets[rep].draw();
        }
    }
    
}
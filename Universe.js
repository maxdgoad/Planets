class Universe {
    
    constructor() {
        this.planets = [new Planet(0, 0 ,0, 169, 0, "Sun", 'assets/earth.jpg'), new Moon()];
        
        this.timeScale = 10; //will change later
        
        this.focused = this.planets[0];
        
        this.font = loadFont('assets/BAUHS93.ttf');
        this.skyBox = loadImage('assets/clouds.jpg');
        this.fontsize = 40;

        this.rate = 0;
        
        textFont(this.font);
	    textSize(this.fontsize);
        textAlign(CENTER, CENTER);
        
    }
    
    draw() {
         
	   texture(this.skyBox);
	   sphere(2000, 100);
        
        for(var rep = 0; rep < this.planets.length; rep++){
            this.planets[rep].draw();
        }
    }
    
}
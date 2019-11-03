class Universe {
    constructor() {
        this.planets = [new Planet(0, 0 ,0, 63.7, 0, "Sun", 'assets/earth.jpg'), new Moon()];
        
        this.timeScale = 10; //will change later
        
        this.focused = this.planets[0];
    }
    
    draw() {
        for(rep = 0; rep < this.planets.length; rep++){
            this.planets[rep].draw();
        }
    }
    
}
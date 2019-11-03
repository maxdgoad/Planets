class Universe {
    constructor() {
        this.planets = [new Planet(0, 0 ,0, 100, 0, "Sun", 'assets/earth.jpg')];
    }
    
    draw() {
        for(rep = 0; rep < this.planets.length; rep++){
            this.planets[rep].draw();
        }
    }
    
}
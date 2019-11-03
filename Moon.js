class Moon extends Planet {
    constructor() {
        super(0, 0, 0, 0, 0, "", "assets/earth.jpg");
        this.orbitX = 0;
        this.orbitZ = 0;
        this.orbitY = 0;
        
        
    }
    
    draw(){
        
        this.orbitX  += .01;
	    this.orbitZ += .01;

        push();
            texture(this.texture);
  		    translate(Math.sin(this.orbitX)*300, this.orbitY, Math.cos(this.orbitZ)*300);
            sphere(17.3, 30, 30);
        pop();
        
        
    }
    
    
}
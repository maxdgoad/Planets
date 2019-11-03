class Moon extends Planet {
    constructor() {
        super(0, 0, 0, 43, 0, "Moon", "assets/moon.jpg");
        this.orbitX = 0;
        this.orbitY = 0;
        this.orbitZ = 0;
       
         
    }
    
    draw(){
        
        this.orbitX  += .01;
	    this.orbitZ  += .01;
        
        this.x = Math.sin(this.orbitX)*300;
        this.y = 0;
        this.z = Math.cos(this.orbitZ)*300;

        push();
            texture(this.texture);
  		    translate(this.x, this.y, this.z);
            sphere(this.radius, 30, 30);
        pop();
        
         
        this.trail[Math.floor((frameCount%this.trailLength)/(this.trailLength/this.trailPoints))] = [this.x ,this.y ,this.z];
        
        this.drawTrail();
        
    }
    
   
}
class Sun extends Planet {
    constructor(timescale) {
        super(0, 0, 0, 240, 0, "Sun", "assets/sun.jpg");
        this.orbitX = 0;
        this.orbitY = 0;
        this.orbitZ = 0;
        this.timescale = timescale;
       
         
    }
    
    draw(){
        
        this.x = 0;
        this.y = 0;
        this.z = 0;

        push();
            texture(this.texture);
  		    translate(this.x, this.y, this.z);
            sphere(this.radius, 120, 120);
        pop();
        
        
    }
    
   
}
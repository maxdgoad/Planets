class Sun extends Planet {
    constructor() {
        super(0, 0, 0, 240, 0, "Sun", "assets/sun.jpg");
        this.orbitX = 0;
        this.orbitY = 0;
        this.orbitZ = 0;
       
         
    }
    
    draw(){
        
        this.x = Math.sin(this.orbitX)*300;
        this.y = 0;
        this.z = Math.cos(this.orbitZ)*300;

        push();
            texture(this.texture);
  		    translate(this.x, this.y, this.z);
            sphere(this.radius, 120, 120);
        pop();
        
        
    }
    
   
}
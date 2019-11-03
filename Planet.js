class Planet {
    constructor(x, y, z, radius, mass, name, texture){
		
        this.x = x; // the xyz position, will add velocity later (vectors hehe)
        this.y = y;
		this.z = z;
        this.radius = radius;
		this.mass = mass;
        this.name = name;

        this.texture = loadImage(texture);
        
        this.trail = [];
        for(var rep = 0; rep < 15; rep++){
            this.trail[rep] = [0,0,0];
        }

    }
    
    
    draw() {
        //draw planet in the scene 
		//where it is supposed to go, velocity, etc
        
        texture(this.texture);
        translate(this.x, this.y, this.z);
        sphere(this.radius, 40, 40);
        
        this.trail[Math.floor((frameCount%150)/5)] = [this.x ,this.y ,this.z];
        
        this.drawTrail();

        
    }
    
    //keep track of the trails of the object (the path behind it)
    drawTrail(){
        
        stroke(255);
	    strokeWeight(7);
        //noFill();
        
        
       
        beginShape();

			for(var rep = Math.floor((frameCount%150)/10)+1; rep < 15; rep++){

				curveVertex(this.trail[rep][0], this.trail[rep][1], this.trail[rep][2]);
                
			}

			for(var rep = 0; rep < Math.floor((frameCount%150)/10)+1; rep++){

				curveVertex(this.trail[rep][0], this.trail[rep][1], this.trail[rep][2]);
                
			}
        
        curveVertex(300,300,300);
        curveVertex(0,0,0);
            
		endShape();
       
       
    }
    
    getCoordinates(){
        return [this.x, this.y, this.z];
    }
    
    getRadius(){
        return this.radius;
    }
    
    getMass(){
        return this.mass;
    }
    
    getName(){
        return this.name
    }

	
    log(){
        console.log("Object name: " + this.name + 
                    "\nObject XYZ: " + Math.floor(this.x) + ", " + Math.floor(this.y) + ", " + Math.floor(this.z) + 
                    "\nObject radius: " + Math.floor(this.radius) +
                    "\nObject mass: " + Math.floor(this.mass));
    }
}
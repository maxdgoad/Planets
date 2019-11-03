class Planet {
    constructor(x, y, z, radius, mass, name, texture){
		
        this.x = x; // the xyz position, will add velocity later (vectors hehe)
        console.log(typeof(this.x))
        this.y = y;
		this.z = z;
        this.radius = radius;
		this.mass = mass;
        this.name = name;

        this.texture = loadImage(texture);
        
        this.trail = new Queue;
        for(rep = 0; rep < 15; rep++){
            this.trail.enqueue([0,0,0]);
        }

    }
    
    
    draw() {
        //draw planet in the scene 
		//where it is supposed to go, velocity, etc
        //
        texture(this.texture);
        translate(this.x, this.y, this.z);
        sphere(this.radius, 40, 40);
        
        this.trail.dequeue();
        this.trail.enqueue([this.x, this.y, this.z]);
        
        this.drawTrail();
        
    }
    
    //keep track of the trails of the object (the path behind it)
    drawTrail(){
        
        
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
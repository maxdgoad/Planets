class Planet {
    constructor(x, y, z, radius, mass, name, texture){
		
        this.x = x; // the xyz position, will add velocity later (vectors hehe)
        this.y = y;
		this.z = z;
        this.radius = radius;
		this.mass = mass;
        this.name = name
        
        this.texture = loadImage(texture);
        
        
		
    }
    draw() {
        //draw planet in the scene 
		//where it is supposed to go, velocity, etc
        //
        texture(this.texture);
        translate(this.x, this.y, this.z);
        sphere(this.radius, 40, 40);
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
    
    mag(){
        return this.real *this.real + this.imaginary * this.imaginary;
    }
}
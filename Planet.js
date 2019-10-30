class Planet {
    constructor(x, y, z, radius, mass){
		
        this.x = x;
        this.y = y;
		this.z = z;
        this.radius = radius;
		this.mass = mass;
		
    }
    add(num1) 
    {
        return new Complex(num1.real + this.real, num1.imaginary +this.imaginary);
    }
    
    subtract(num1)
    {
        return new Complex(num1.real - this.real, num1.imaginary - this.imaginary);
    }
    
    multiply(num1)
    {
        return new Complex(this.real * num1.real - this.imaginary * num1.imaginary, this.real * num1.imaginary + this.imaginary * num1.real);
    }
    
    divide(num1)
    {
        return new Complex(num1.real / this.real, num1.imaginary / this.imaginary);
    }
	
    log()
    {
        console.log(this.real + " " + this.imaginary);
    }
    
    mag()
    {
        return this.real *this.real + this.imaginary * this.imaginary;
    }
}
        /**
         * does things before the program is "shown"
		 * @pre none
		 *		@param none
		 *		@post does things before the program is "shown"
		 * 		@return none
		 */
function setup() {
  	cnv = createCanvas(windowWidth, windowHeight, WEBGL);
	setAttributes('antialias', true);
    
    slider = createSlider(1, 50, 1);
    slider.position(10, 10);
    slider.style('width', '100px');
	
	frameRate(60);
    
    u = new Universe();
    u.addPlanet(30, "Ceres", "ceres.jpg");
}

        /**
         * draws things into the program
		 * @pre none
		 *		@param none
		 *		@post draws things into the program
		 * 		@return none
		 */
function draw() {
	background(0);
	keyDown();
	camera(camX , camY, camZ, 0, 0, 0, 0, 1, 0); // first three are camera's xyz, next three are where camera is looking, last three are orthogonal direction ( ie, orientation)
    
    //orbitControl(3,3,3);
    
    u.draw();
    
    u.drawPlanet();
}


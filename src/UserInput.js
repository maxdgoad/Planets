//user input handler quarantine :)


let rotateX = 0;
let rotateY = 0;
let rotateZ = 0;

let camRad = 700;

let camX = -1*Math.sin(rotateX)*camRad;
let camY = 0;
let camZ = 1*Math.cos(rotateZ)*camRad;

        /**
		 * @pre a key is pressed
		 *		@param none
		 *		@post checks for a key being pressed
		 * 		@return none
		 */
function keyDown(){
	
	if(keyIsDown(LEFT_ARROW)){
		rotateX+=.07;
		rotateZ+=.07;
		
		camX = -sin(rotateX)*camRad;
		camZ = cos(rotateZ)*camRad;
		
		
	}
	
	if(keyIsDown(RIGHT_ARROW)){
		rotateX-=.07;
		rotateZ-=.07;
		
		camX = -sin(rotateX)*camRad;
		camZ = cos(rotateZ)*camRad;
		
		
	}
	
	if(keyIsDown(DOWN_ARROW)){
		if(-sin(rotateY) <  .99){
			rotateY-=.07;
			//rotateZ-=.07;
		
			camY = -sin(rotateY)*camRad;
			//camZ = cos(rotateZ)*camRad;
			
		}
		
		
		
		
	}
	
	if(keyIsDown(UP_ARROW)){
		if(-sin(rotateY) > -.99){
			rotateY+=.07;
			//rotateZ+=.07;
		
			camY = -sin(rotateY)*camRad;
			//camZ = cos(rotateZ)*camRad;
			
		}
	}
}

        /**
		 * @pre mouse wheel is used
		 *		@param none
		 *		@post sees if the mouse wheel is used
		 * 		@return none
		 */
function mouseWheel(event) {
	
	camX/=camRad;
	camY/=camRad;
	camZ/=camRad;
	
	
	
  	camRad += event.delta/2;
	
	camX*=camRad;
	camY*=camRad;
	camZ*=camRad;
	
}

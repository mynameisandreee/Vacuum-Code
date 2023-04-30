var object;


var turns= 0 ;
var count= 0;
function createSquare() {
  var square = document.getElementById("square");
  for (var i = 0; i < 100; i++) {
    var cell = document.createElement("div");
    cell.className = "cell";
    square.appendChild(cell);
  }
}

function createObject() {
  object = document.createElement("div");
  object.id = "object";
  object.direction = "right";
  document.body.appendChild(object);
  moveObject();
}

function moveObject() {

  
  var currentPositionX = parseInt(object.style.left) || 0;
  var currentPositionY = parseInt(object.style.top) || 0;
  var nextPositionX = currentPositionX;
  var nextPositionY = currentPositionY;
 
  // if we are at the end of the grid, then just return
  if (nextPositionY >= 200 && currentPositionX >= 180) {
	return;
  }
 
  if (object.direction == "right" && currentPositionX < 180) {
	if (currentPositionX == 0) turns += 1;
	nextPositionX += 20;	// right
  } else if (object.direction == "right" && currentPositionX >= 180) {
	nextPositionY += 20;
	turns+= 1;		// down and turn left
	object.direction = "left";
  } else if (object.direction == "left" && currentPositionX > 0) {
	if (currentPositionX >= 180) turns += 1;   // count left turn
	nextPositionX -= 20;   // left
  } else if (object.direction == "left" && currentPositionX <= 0) {
	nextPositionY += 20;
	object.direction = "right";  // down and turn right
	turns += 1;
  } 
 
/**** 
  if (currentPositionY == 0 && currentPositionX < 180) {    //right
    nextPositionX += 20;
  }if (currentPositionX == 180 && currentPositionY == 0) {  //down
    nextPositionY = 20;
    turns +=1;
  }if (currentPositionY == 20 && currentPositionX > 0) {    //left
    nextPositionX -= 20;
  }if ( currentPositionX == 0 && currentPositionY == 20) {  //down 
    nextPositionY = 40;  
    turns++;
  }if (currentPositionY == 40 && currentPositionX < 180){   //right
    nextPositionX +=20; 
  }


  if(currentPositionX == 180 && currentPositionY == 40 ){   //down
    nextPositionY = 60;
    turns++;
  }
  if (currentPositionY == 60 && currentPositionX > 0) {   //left
    nextPositionX -= 20;
  }
  if ( currentPositionX == 0 && currentPositionY == 60) {   //down
    nextPositionY = 80;
    turns++;
  }


  if (currentPositionY == 80 && currentPositionX < 180){        //right
    nextPositionX +=20;
  } if (currentPositionX == 180 && currentPositionY == 80) {    //down 
    nextPositionY = 100;
    turns++;
  } if (currentPositionY == 100 && currentPositionX > 0) {       //left
    nextPositionX -= 20;
  } if ( currentPositionX == 0 && currentPositionY == 100) {      //down
    nextPositionY = 120;  
    turns++;
  } if (currentPositionY == 120 && currentPositionX < 180){       //right
    nextPositionX +=20;
  }
    


  if (currentPositionX == 180 && currentPositionY == 120) {    //down 
    nextPositionY = 140;
    turns++;
  } 


  if (currentPositionY == 140 && currentPositionX > 0) {       //left
    nextPositionX -= 20;
  }


  if ( currentPositionX == 0 && currentPositionY == 140) {      //down
    nextPositionY = 160;  
    turns++;
  } 
  if (currentPositionY == 160 && currentPositionX < 180){       //right
    nextPositionX +=20;
  }
  if (currentPositionY == 160 && currentPositionX == 180){
    nextPositionY = 180;
    turns++;
  }
  if(currentPositionY == 180 && currentPositionX > 0){
    nextPositionX-= 20;
  }

******************/
  
  object.style.left = nextPositionX + "px";
  object.style.top = nextPositionY + "px";
  setTimeout(moveObject, 100);

 
  
  var outputBox = document.getElementById("output");
  outputBox.innerHTML = "Number of turns: " + turns; 

  
  
}



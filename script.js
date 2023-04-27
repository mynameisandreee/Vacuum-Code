var object;

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
  document.body.appendChild(object);
  moveObject();
}

function moveObject() {
  var currentPositionX = parseInt(object.style.left) || 0;
  var currentPositionY = parseInt(object.style.top) || 0;
  var nextPositionX = currentPositionX;
  var nextPositionY = currentPositionY;
  
 
  if (currentPositionY == 0 && currentPositionX < 180) {
    nextPositionX += 20;
  }
  if (currentPositionX == 180 && currentPositionY == 0) {
    nextPositionY = 20;
  } 
  if (currentPositionY == 20 && currentPositionX > 0) {
    nextPositionX -= 20;
  } 
  if ( currentPositionX == 0 && currentPositionY == 20) {
    nextPositionY = 40;
    
  } 
  
  if (currentPositionY == 40 && currentPositionX < 180){
    nextPositionX +=20;
    
  }
  if(currentPositionX == 180 && currentPositionY == 40 ){
    nextPositionY = 60;
  }
  if (currentPositionY == 60 && currentPositionX > 0) {
    nextPositionX -= 20;
  }
  if ( currentPositionX == 0 && currentPositionY == 60) {
    nextPositionY = 80;
  }
  if (currentPositionY == 80 && currentPositionX < 180){
    nextPositionX +=20;
  }
  
  


  object.style.left = nextPositionX + "px";
  object.style.top = nextPositionY + "px";
  setTimeout(moveObject, 500);
}

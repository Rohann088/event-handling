var canvasObject = document.getElementById("game")
var canvas = canvasObject.getContext("2d");

document.addEventListener("keydown", keyDownHandler, false)

document.addEventListener("keyup", keyUpHandler, false)

var cPresesd;
var sPressed;
var ePressed;
var tPressed;
var rPressed;

function keyDownHandler(e) {
  if (e.keyCode == 67) {
    cPressed = true;
  }
  elif (e.keyCode == 83) {
    sPressed = true;
  }
  elif (e.keyCode == 69) {
    ePressed = true;
  }
  elif (e.keyCode == 84) {
    tPressed = true;
  }
  elif (e.keyCode == 82) {
    rPressed = true;
  }

  
  
  
}

function keyDownHandler(e) {
  if (e.keyCode == 67) {
    cPresed = false;
  }
  elif (e.keyCode == 83) {
    sPressed = false;
  }
  elif (e.keyCode == 69) {
    ePressed = false;
  }
  elif (e.keyCode == 84) {
    tPressed = false;
  }
  elif (e.keyCode == 82) {
    rPressed = false;
  }
 
}
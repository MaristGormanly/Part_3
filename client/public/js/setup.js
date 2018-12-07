document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
	var keyCode = e.keyCode;
  if(keyCode==49) {
	  alert ("You have selected to be a banker from Boston");
  } else if (keyCode==50){
  	  alert ("You have selected to be a carpenter from Ohio");
  } else if (keyCode==51){
	  alert ("You have selected to be a farmer from Illinois");
  } else if (keyCode==52){
	  alert ("You have selected to be find out the differences between the characters");
  } else if (keyCode==32){
	  window.location.href="/mainmenu";
  } else {
  	  alert ("Please select an option 1-4 or go back to the Menu by pressing the Spacebar.");
  }
}

document.getElementById("blinkText").onclick = function() {
    window.location.href = "/mainmenu";
}


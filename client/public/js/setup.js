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

function gameScreen(screenNumber)   {
    
    var gameContainer = document.getElementById("gameContainer");

    fetch('/game/getNewGameScreen/' + screenNumber).then(function(response) {
      if (response.status !== 200) {
        console.log('Problem with ajax call!' + response.status + " msg: "  +
        response.value);
          return;
        }
        currentScreen = screenNumber;
        response.text().then(function(data) {
        gameContainer.innerHTML = data;
        if(currentScreen == 4) {
          showSettings();
        }
      })
  });
}
gameScreen(0);

//Fetches json values from gameSettings array
function showSettings() {
  fetch('/game/getSettings').then(function(response) {
    if (response.status !== 200) {
        console.log('Problem with ajax call! ' + response.status + "msg: " + response.value);
        return;
    }
    response.json().then(function(data) {
      console.log(data);
      displaySettings(data);
      return data;
    });
  });
}